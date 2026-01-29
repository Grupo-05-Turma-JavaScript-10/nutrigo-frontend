import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      setTimeout(() => {
        const element = document.getElementById("produtos");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 10);
    } else {
      navigate("/#produtos");
    }
  };

  return (
    <footer className="w-full bg-nutrigo-cream text-gray-500 pt-20 pb-10 relative">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-nutrigo-green to-transparent opacity-60" />

      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-18 items-start">
          <div className="flex flex-col -mt-8">
            <Link
              to="/"
              className="w-fit transition-transform hover:scale-105 -ml-8"
            >
              <img
                src="https://ik.imagekit.io/k6kki72wv/nutrigo.png"
                alt="NutriGo Logo"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-sm opacity-80 max-w-[220px] -mt-1">
              Tudo o que você deseja em um só lugar, com uma categoria exclusiva
              dedicada à sua alimentação saudável.
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-lg mb-4 text-gray-500">
              Links Rápidos
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-nutrigo-green transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#produtos"
                  onClick={handleMenuClick}
                  className="hover:text-nutrigo-green transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-nutrigo-green transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-lg mb-4 text-gray-500">Contato</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-nutrigo-green" /> (11)
                99999-9999
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-nutrigo-green" />{" "}
                hello@nutrigo.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-nutrigo-green" /> São Paulo,
                SP
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-lg mb-4 text-gray-500">Siga-nos</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener"
                className="w-10 h-10 bg-nutrigo-brown rounded-full flex items-center justify-center text-white hover:bg-nutrigo-green transition-all"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                className="w-10 h-10 bg-nutrigo-brown rounded-full flex items-center justify-center text-white hover:bg-nutrigo-green transition-all"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener"
                className="w-10 h-10 bg-nutrigo-brown rounded-full flex items-center justify-center text-white hover:bg-nutrigo-green transition-all"
              >
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-nutrigo-green/40 to-transparent" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-70">
          <p>© 2026 NutriGo. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:underline">
              Política de Privacidade
            </Link>
            <Link to="/terms" className="hover:underline">
              Termos de Serviço
            </Link>
            <Link to="/cookies" className="hover:underline">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
