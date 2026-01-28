import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-nutrigo-cream text-nutrigo-brown py-12 border-t border-gray-200">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4">
            <img
              src="https://ik.imagekit.io/k6kki72wv/nutrigo.png"
              alt="NutriGo Logo"
              className="h-16 w-auto object-contain self-start"
            />
            <p className="text-sm leading-relaxed opacity-80">
              Tudo o que você deseja em um só lugar, com uma categoria exclusiva
              dedicada à sua alimentação saudável.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
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
                  to="/menu"
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
              <li>
                <Link
                  to="/contact"
                  className="hover:text-nutrigo-green transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
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

          <div>
            <h4 className="font-bold text-lg mb-4">Siga-nos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-nutrigo-brown text-white rounded-full flex items-center justify-center hover:bg-nutrigo-green transition-colors"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-nutrigo-brown text-white rounded-full flex items-center justify-center hover:bg-nutrigo-green transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-nutrigo-brown text-white rounded-full flex items-center justify-center hover:bg-nutrigo-green transition-colors"
              >
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-70">
          <p>© 2026 NutriGo. Todos os direitos reservados.</p>
          <div className="flex gap-6">
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
