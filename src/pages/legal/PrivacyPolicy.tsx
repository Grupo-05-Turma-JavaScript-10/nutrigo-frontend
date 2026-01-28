import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-nutrigo-cream text-nutrigo-brown py-20 px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Política de Privacidade
        </h1>

        <div className="space-y-6 text-lg leading-relaxed opacity-90">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-nutrigo-green">
              1. Introdução
            </h2>
            <p>
              Na NutriGo, a sua privacidade é nossa prioridade. Esta política
              explica como coletamos, usamos e protegemos seus dados pessoais
              quando você utiliza nosso aplicativo de delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-nutrigo-green">
              2. Dados Coletados
            </h2>
            <p>
              Para oferecer a melhor experiência, coletamos informações como
              nome, endereço de entrega, e-mail e histórico de pedidos. Além
              disso, temos uma curadoria especial para dados da sua categoria de
              alimentação saudável, garantindo recomendações personalizadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-nutrigo-green">
              3. Uso de Informações
            </h2>
            <p>
              Seus dados são utilizados exclusivamente para o processamento de
              pedidos, melhoria da plataforma e comunicações sobre suas
              entregas. Não compartilhamos suas informações com terceiros para
              fins de marketing sem seu consentimento explícito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-nutrigo-green">
              4. Segurança
            </h2>
            <p>
              Implementamos medidas rigorosas de segurança para proteger suas
              informações contra acesso não autorizado ou alteração de dados.
            </p>
          </section>

          <section className="pt-8 border-t border-gray-300">
            <p className="text-sm italic">
              Última atualização: 28 de Janeiro de 2026.
            </p>
            <div className="mt-6 text-center">
              <Link
                to="/"
                className="text-nutrigo-green font-bold hover:underline"
              >
                Voltar para a Home
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
