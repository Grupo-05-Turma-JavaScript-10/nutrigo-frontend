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
    <footer className="w-full bg-nutrigo-cream text-nutrigo-brown py-12 relative">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-nutrigo-green to-transparent opacity-60" />

      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4">
            <Link
              to="/home"
              className="transition-transform hover:scale-105 self-start"
            >
              <img
                src="https://ik.imagekit.io/k6kki72wv/nutrigo.png"
                alt="NutriGo Logo"
                className="h-20 w-auto object-contain"
              />
            </Link>
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
                  to="/home"
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
                href="https://www.facebook.com/"
                target="_blank"
                className="w-10 h-10 bg-nutrigo-brown text-white rounded-full flex items-center justify-center hover:bg-nutrigo-green transition-colors"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="w-10 h-10 bg-nutrigo-brown text-white rounded-full flex items-center justify-center hover:bg-nutrigo-green transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                className="w-10 h-10 bg-nutrigo-brown text-white rounded-full flex items-center justify-center hover:bg-nutrigo-green transition-colors"
              >
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="my-8 w-full h-px bg-gradient-to-r from-transparent via-nutrigo-green/40 to-transparent" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-70">
          <p>© 2026 NutriGo. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:underline" target="_blank">
              Política de Privacidade
            </a>
            <a href="/terms" className="hover:underline" target="_blank">
              Termos de Serviço
            </a>
            <a href="/cookies" className="hover:underline" target="_blank">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
