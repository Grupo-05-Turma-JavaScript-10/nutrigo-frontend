import { Link } from "react-router-dom";
import {
  Scale,
  Gavel,
  CheckCircle,
  AlertTriangle,
  ChevronLeft,
  ArrowRight,
} from "lucide-react";

function TermsOfService() {
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
              <Scale className="text-nutrigo-green w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-nutrigo-brown leading-tight">
              Termos de <span className="text-nutrigo-green">Serviço</span>
            </h1>
            <p className="text-gray-500 mt-4 text-lg max-w-2xl">
              As regras e diretrizes para garantir a melhor experiência de
              delivery saudável para você.
            </p>
          </div>

          <div className="p-8 md:p-16 space-y-12 bg-white">
            <section className="grid md:grid-cols-4 gap-6">
              <div className="md:col-span-1 flex items-center gap-2 self-start md:pt-1">
                <Gavel className="text-nutrigo-green w-4 h-4 shrink-0" />
                <h2 className="text-[10px] font-bold text-nutrigo-brown uppercase tracking-[0.2em]">
                  01. Aceitação
                </h2>
              </div>
              <div className="md:col-span-3 max-w-2xl">
                <p className="text-gray-500 leading-relaxed">
                  Ao acessar e utilizar a plataforma NutriGo, você concorda
                  automaticamente com estes termos. Nosso serviço é destinado a
                  fornecer refeições nutritivas de forma prática e segura.
                </p>
              </div>
            </section>

            <section className="grid md:grid-cols-4 gap-6">
              <div className="md:col-span-1 flex items-center gap-2 self-start md:pt-1">
                <CheckCircle className="text-nutrigo-green w-4 h-4 shrink-0" />
                <h2 className="text-[10px] font-bold text-nutrigo-brown uppercase tracking-[0.2em]">
                  02. Pedidos
                </h2>
              </div>
              <div className="md:col-span-3 max-w-2xl">
                <p className="text-gray-500 leading-relaxed">
                  Os pedidos estão sujeitos à disponibilidade de estoque e área
                  de cobertura. Certifique-se de que os dados de entrega estão
                  corretos para evitar atrasos na sua refeição.
                </p>
              </div>
            </section>

            <section className="grid md:grid-cols-4 gap-6">
              <div className="md:col-span-1 flex items-center gap-2 self-start md:pt-1">
                <AlertTriangle className="text-nutrigo-green w-4 h-4 shrink-0" />
                <h2 className="text-[10px] font-bold text-nutrigo-brown uppercase tracking-[0.2em]">
                  03. Cancelamento
                </h2>
              </div>
              <div className="md:col-span-3 max-w-2xl">
                <p className="text-gray-500 leading-relaxed">
                  Cancelamentos podem ser feitos sem custo até o início do
                  preparo da refeição. Devido à natureza perecível dos
                  alimentos, pedidos já em rota de entrega não podem ser
                  cancelados.
                </p>
              </div>
            </section>
          </div>

          <div className="p-8 md:p-10 bg-nutrigo-cream/50 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-nutrigo-brown/5">
            <div className="text-center md:text-left">
              <h3 className="text-nutrigo-brown font-bold text-lg">
                Dúvidas sobre os termos?
              </h3>
              <p className="text-gray-500 text-sm">
                Nossa equipe está disponível para explicar qualquer cláusula.
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

export default TermsOfService;
