import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_BACK_END_URL}/api`,
    withCredentials: true,
});

// Interceptor de respuesta
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token inválido o expirado
      localStorage.removeItem("auth");
      window.location.href = "/login";
    }else{
    }
    return Promise.reject(error);
  }
  
);

export default api;