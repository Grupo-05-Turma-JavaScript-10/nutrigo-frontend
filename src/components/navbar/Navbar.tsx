import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User, ShoppingCart, Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="w-full flex justify-center py-2 bg-nutrigo-cream font-sans fixed top-0 left-0 z-50 shadow-sm">
      <div className="max-w-7xl w-full flex justify-between items-center px-4 md:px-8">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden rounded-md p-2 border border-gray-200"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link
            to="/"
            className="flex items-center transition-transform hover:scale-105"
          >
            <img
              src="https://ik.imagekit.io/k6kki72wv/nutrigo.png"
              alt="NutriGo Logo"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 lg:gap-10 text-gray-500 font-semibold">
          <Link to="/" className="hover:text-nutrigo-green transition-colors">
            Home
          </Link>
          <Link
            to="/menu"
            className="hover:text-nutrigo-green transition-colors"
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="hover:text-nutrigo-green transition-colors"
          >
            Sobre
          </Link>
        </div>

        <div className="flex items-center gap-4 md:gap-6 text-nutrigo-brown">
          <Link to="/admin">
            <button
              title="Perfil"
              className="hover:opacity-70 transition-opacity cursor-pointer"
            >
              <User size={22} className="md:h-6 md:w-6" />
            </button>
          </Link>

          <button
            title="Carrinho"
            className="relative hover:opacity-70 transition-opacity cursor-pointer"
          >
            <ShoppingCart size={22} className="md:h-6 md:w-6" />
            <span className="absolute -top-2 -right-2 bg-nutrigo-green text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-nutrigo-cream">
              1
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-nutrigo-green/60 to-transparent" />

      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-0 bg-nutrigo-cream/95 backdrop-blur-sm flex flex-col items-center justify-center gap-6">
            <button
              aria-label="Fechar"
              className="absolute top-4 left-4 rounded-md p-2 border border-gray-200 bg-white/80"
              onClick={() => setOpen(false)}
            >
              <X size={20} />
            </button>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="text-2xl font-bold text-[#273024] hover:text-nutrigo-green transition-colors"
            >
              Home
            </Link>
            <Link
              to="/menu"
              onClick={() => setOpen(false)}
              className="text-2xl font-bold text-[#273024] hover:text-nutrigo-green transition-colors"
            >
              Menu
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="text-2xl font-bold text-[#273024] hover:text-nutrigo-green transition-colors"
            >
              Sobre
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
