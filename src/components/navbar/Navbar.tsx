import { Link } from "react-router-dom";
import { User, ShoppingCart } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full flex justify-center py-2 bg-nutrigo-cream font-sans sticky top-0 z-50">
      <div className="container flex justify-between items-center mx-8">
        <Link
          to="/home"
          className="flex items-center transition-transform hover:scale-105"
        >
          <img
            src="https://ik.imagekit.io/k6kki72wv/nutrigo.png"
            alt="NutriGo Logo"
            className="h-20 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-10 text-gray-500 font-semibold">
          <Link
            to="/home"
            className="hover:text-nutrigo-green transition-colors"
          >
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

        <div className="flex items-center gap-6 text-nutrigo-brown">
          <button
            title="Perfil"
            className="hover:opacity-70 transition-opacity cursor-pointer"
          >
            <User size={24} />
          </button>

          <button
            title="Carrinho"
            className="relative hover:opacity-70 transition-opacity cursor-pointer"
          >
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-nutrigo-green text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-nutrigo-cream">
              1
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-nutrigo-green/60 to-transparent" />
    </nav>
  );
}

export default Navbar;
