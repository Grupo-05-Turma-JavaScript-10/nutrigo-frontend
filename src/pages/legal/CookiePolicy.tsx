import { Link } from "react-router-dom";
import {
  Cookie,
  Target,
  BarChart3,
  Settings,
  ChevronLeft,
  ArrowRight,
} from "lucide-react";

function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white py-12 md:py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-nutrigo-green transition-colors mb-8 group"
        >
          <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
          Voltar para a Home
        </Link>

        <div className="bg-nutrigo-cream shadow-sm border border-nutrigo-brown/5 rounded-3xl overflow-hidden">
          <div className="p-8 md:p-16 border-b border-nutrigo-brown/10 bg-white/40">
            <div className="inline-flex items-center justify-center bg-white p-3 rounded-2xl shadow-sm mb-6 border border-nutrigo-brown/5">
              <Cookie className="text-nutrigo-green w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-nutrigo-brown leading-tight">
              Política de <span className="text-nutrigo-green">Cookies</span>
            </h1>
            <p className="text-gray-500 mt-4 text-lg max-w-2xl">
              Explicamos como utilizamos cookies para personalizar sua
              experiência e melhorar nossos serviços.
            </p>
          </div>

          <div className="p-8 md:p-16 space-y-12 bg-white">
            <section className="grid md:grid-cols-4 gap-6">
              <div className="md:col-span-1 flex items-center gap-2 self-start md:pt-1">
                <Target className="text-nutrigo-green w-4 h-4 shrink-0" />
                <h2 className="text-[10px] font-bold text-nutrigo-brown uppercase tracking-[0.2em]">
                  01. Essenciais
                </h2>
              </div>
              <div className="md:col-span-3 max-w-2xl">
                <p className="text-gray-500 leading-relaxed">
                  Estes cookies são necessários para o funcionamento do site,
                  permitindo que você navegue, adicione pratos ao carrinho e
                  realize pedidos de forma segura.
                </p>
              </div>
            </section>

            <section className="grid md:grid-cols-4 gap-6">
              <div className="md:col-span-1 flex items-center gap-2 self-start md:pt-1">
                <BarChart3 className="text-nutrigo-green w-4 h-4 shrink-0" />
                <h2 className="text-[10px] font-bold text-nutrigo-brown uppercase tracking-[0.2em]">
                  02. Performance
                </h2>
              </div>
              <div className="md:col-span-3 max-w-2xl">
                <p className="text-gray-500 leading-relaxed">
                  Utilizamos cookies analíticos para entender quais pratos são
                  os favoritos e como podemos otimizar a velocidade da nossa
                  plataforma para você.
                </p>
              </div>
            </section>

            <section className="grid md:grid-cols-4 gap-6">
              <div className="md:col-span-1 flex items-center gap-2 self-start md:pt-1">
                <Settings className="text-nutrigo-green w-4 h-4 shrink-0" />
                <h2 className="text-[10px] font-bold text-nutrigo-brown uppercase tracking-[0.2em]">
                  03. Preferências
                </h2>
              </div>
              <div className="md:col-span-3 max-w-2xl">
                <p className="text-gray-500 leading-relaxed">
                  Estes cookies lembram suas escolhas, como filtros de dieta ou
                  endereço padrão, para que você não precise preenchê-los toda
                  vez que quiser comer de forma saudável.
                </p>
              </div>
            </section>
          </div>

          <div className="p-8 md:p-10 bg-nutrigo-cream/50 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-nutrigo-brown/5">
            <div className="text-center md:text-left">
              <h3 className="text-nutrigo-brown font-bold text-lg">
                Gerenciar Cookies?
              </h3>
              <p className="text-gray-500 text-sm">
                Você pode alterar as configurações no seu navegador a qualquer
                momento.
              </p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center px-8 py-3 bg-nutrigo-brown text-white font-bold rounded-xl hover:bg-nutrigo-green transition-all duration-300 group shadow-md"
            >
              Falar com o Suporte
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookiePolicy;
