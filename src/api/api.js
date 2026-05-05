import axios from "axios";

const backendUrl = import.meta.env.VITE_BACK_END_URL || "";

const api = axios.create({
  // En producción (backendUrl vacío), el baseURL es /api para asegurar que se use el prefijo
  baseURL: backendUrl ? (backendUrl.endsWith('/') ? backendUrl + "api" : backendUrl + "/api") : "/api",
  withCredentials: true,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
});

// Interceptor de REQUEST: asegura que las URLs se unan correctamente al baseURL
api.interceptors.request.use((config) => {
  // Si la URL empieza con / y no tiene ya el prefijo /api, le quitamos el / 
  // para que sea relativa al baseURL y se le añada el /api correctamente.
  if (config.url && config.url.startsWith("/") && !config.url.startsWith("/api")) {
    config.url = config.url.substring(1);
  }
  return config;
});

// Interceptor de RESPONSE: redirige al login si el token JWT expiró o no es válido
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Solo limpiamos y redirigimos si no estamos ya en la página de login
      if (!window.location.pathname.includes("/login")) {
        localStorage.removeItem("auth");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;