import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark border-t primary:border-slate-800 px-6 lg:px-20 py-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-primary">
            <h2 className="text-slate-900 text-xl font-black leading-tight tracking-tighter uppercase">E-Shop</h2>
          </div>
          <p className="text-slate-500 text-sm font-medium">Reimagining youth fashion for a new generation. Style with no limits, vibes with no boundaries.</p>
          <div className="flex gap-4">
            <button className="size-10 rounded-full bg-slate-100 dark:bg-slate-400 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            </button>
            <button className="size-10 rounded-full bg-slate-100 dark:bg-slate-400 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            </button>
          </div>
        </div>
        <div>
          <h4 className="font-black uppercase mb-6 text-sm tracking-widest">Shop</h4>
          <ul className="flex flex-col gap-4 text-slate-500 text-sm font-medium">
            <li><Link to="/catalog" className="hover:text-primary transition-colors">New Arrivals</Link></li>
            <li><Link to="/catalog" className="hover:text-primary transition-colors">Bestsellers</Link></li>
            <li><Link to="/catalog" className="hover:text-primary transition-colors">Sale</Link></li>
            <li><Link to="/catalog" className="hover:text-primary transition-colors">Gift Cards</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black uppercase mb-6 text-sm tracking-widest">Support</h4>
          <ul className="flex flex-col gap-4 text-slate-500 text-sm font-medium">
            <li><Link to="/about" className="hover:text-primary transition-colors">Help Center</Link></li>
            <li><Link to="/cart" className="hover:text-primary transition-colors">Track Order</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">Shipping Info</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">Returns</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black uppercase mb-6 text-sm tracking-widest">Contact</h4>
          <ul className="flex flex-col gap-4 text-slate-500 text-sm font-medium">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">mail</span> hello@vibestore.com</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">phone</span> +1 (555) VIBE-NOW</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">location_on</span> New York, NY 10012</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
        <p>© 2024 VIBE FASHION GROUP INC.</p>
      </div>
    </footer>
  );
}
