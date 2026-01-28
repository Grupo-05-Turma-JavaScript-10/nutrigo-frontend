import carlosRibeiroImg from "../../assets/CARLOS RIBEIRO-1.jpg";
import fernandaSilveiraImg from "../../assets/FERNANDA SILVEIRA-1 (1).jpg";
import luisLeaoImg from "../../assets/LUIS LEAO-1.jpg";
import luisaBackesImg from "../../assets/LUISA BACKES-3.jpg";
import marianaPiresImg from "../../assets/MARIANA BARBOSA PIRES-2.jpg";
import miguelLewandowskiImg from "../../assets/MIGUEL LEONARDO-2.jpg";
import sandroCostaImg from "../../assets/SANDRO COSTA-1.jpg";

function About() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full py-16 md:py-20 border-b border-nutrigo-brown/10 bg-nutrigo-cream">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-5">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-nutrigo-green">
            Sobre a Nutri<span className="text-nutrigo-brown">Go</span>
          </h1>

          <span className="inline-flex items-center justify-center text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-nutrigo-brown bg-white border border-nutrigo-brown/10 px-5 py-2 rounded-full shadow-sm">
            Saudável, prático e delicioso
          </span>

          <p className="text-lg text-gray-500 leading-relaxed">
            A NutriGo nasceu para tornar a alimentação saudável simples no dia a dia. Reunimos
            opções equilibradas, saborosas e práticas, com cardápios pensados por nutricionistas
            e ingredientes selecionados. Assim, você come bem sem abrir mão de tempo, sabor ou
            qualidade.
          </p>
        </div>
      </section>

      <section className="w-full py-14 bg-white">
        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <article className="space-y-3 bg-nutrigo-cream/50 border border-nutrigo-brown/10 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-nutrigo-brown flex items-center gap-3">
              <span className="w-1 h-6 bg-nutrigo-green rounded-full"></span>
              Nossa Missão
            </h2>

            <p className="text-gray-500 leading-relaxed">
              Facilitar escolhas saudáveis com refeições prontas, balanceadas e acessíveis.
              Trabalhamos para entregar variedade, transparência nutricional e uma experiência
              rápida desde o pedido até a mesa, garantindo praticidade sem comprometer a saúde.
            </p>
          </article>

          <article className="space-y-3 bg-nutrigo-cream/50 border border-nutrigo-brown/10 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-nutrigo-brown flex items-center gap-3">
              <span className="w-1 h-6 bg-nutrigo-green rounded-full"></span>
              Nossos Valores
            </h2>

            <p className="text-gray-500 leading-relaxed">
              Acreditamos em comida de verdade, com equilíbrio e responsabilidade. Nossos valores
              são guiados por qualidade dos ingredientes, respeito aos diferentes estilos de vida
              e transparência nas informações nutricionais, além de um atendimento próximo e humano.
            </p>
          </article>
        </div>
      </section>

      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-6 max-w-7xl space-y-8">
          <header className="text-center space-y-2">
            <h2 className="text-3xl font-black tracking-tight text-nutrigo-brown">
              Conheça a nossa equipe
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto">
              Um time movido por cuidado, ciência nutricional e paixão por comida de verdade.
            </p>
          </header>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            <li className="group bg-nutrigo-cream/60 rounded-3xl border border-nutrigo-brown/10 p-6 flex flex-col items-center text-center space-y-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl focus-within:ring-2 focus-within:ring-nutrigo-green">
              <img
                src={carlosRibeiroImg}
                alt="Carlos Eduardo Ribeiro"
                className="w-28 h-28 rounded-full object-cover bg-gray-200 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:ring-4 group-hover:ring-nutrigo-green/20"
              />

              <h3 className="font-semibold text-nutrigo-brown transition-colors duration-300 group-hover:text-nutrigo-green">
                Carlos Eduardo Ribeiro
              </h3>

              <div className="flex gap-4 text-sm font-medium">
                <a
                  href="https://www.linkedin.com/in/eduardoribeirodefraga/"
                  target="_blank"
                  className="relative text-gray-500 transition-colors duration-300 hover:text-nutrigo-green focus-visible:outline-none after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-nutrigo-green after:transition-all after:duration-300 hover:after:w-full"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/Eduarddoribeiro"
                  target="_blank"
                  className="relative text-gray-500 transition-colors duration-300 hover:text-nutrigo-green focus-visible:outline-none after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-nutrigo-green after:transition-all after:duration-300 hover:after:w-full"
                >
                  GitHub
                </a>
              </div>
            </li>

            <li className="group bg-nutrigo-cream/60 rounded-3xl border border-nutrigo-brown/10 p-6 flex flex-col items-center text-center space-y-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl focus-within:ring-2 focus-within:ring-nutrigo-green">
              <img
                src={fernandaSilveiraImg}
                alt="Fernanda Silveira Veeck"
                className="w-28 h-28 rounded-full object-cover bg-gray-200 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:ring-4 group-hover:ring-nutrigo-green/20"
              />

              <h3 className="font-semibold text-nutrigo-brown transition-colors duration-300 group-hover:text-nutrigo-green">
                Fernanda Silveira Veeck
              </h3>

              <div className="flex gap-4 text-sm font-medium">
                <a
                  href="https://www.linkedin.com/in/fernanda-silveira-veeck/"
                  target="_blank"
                  className="relative text-gray-500 transition-colors duration-300 hover:text-nutrigo-green focus-visible:outline-none after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-nutrigo-green after:transition-all after:duration-300 hover:after:w-full"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/fernandaveeck"
                  target="_blank"
                  className="relative text-gray-500 transition-colors duration-300 hover:text-nutrigo-green focus-visible:outline-none after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-nutrigo-green after:transition-all after:duration-300 hover:after:w-full"
                >
                  GitHub
                </a>
              </div>
            </li>

            <li className="group bg-nutrigo-cream/60 rounded-3xl border border-nutrigo-brown/10 p-6 flex flex-col items-center text-center space-y-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl focus-within:ring-2 focus-within:ring-nutrigo-green">
              <img
                src={luisLeaoImg}
                alt="Luis Felipe Leão"
                className="w-28 h-28 rounded-full object-cover bg-gray-200 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:ring-4 group-hover:ring-nutrigo-green/20"
              />

              <h3 className="font-semibold text-nutrigo-brown transition-colors duration-300 group-hover:text-nutrigo-green">
                Luis Felipe Leão
              </h3>

              <div className="flex gap-4 text-sm font-medium">
                <a
                  href="https://www.linkedin.com/in/luisfele%C3%A3o/"
                  target="_blank"
                  className="relative text-gray-500 transition-colors duration-300 hover:text-nutrigo-green focus-visible:outline-none after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-nutrigo-green after:transition-all after:duration-300 hover:after:w-full"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/SrMaestro"
                  target="_blank"
                  className="relative text-gray-500 transition-colors duration-300 hover:text-nutrigo-green focus-visible:outline-none after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-nutrigo-green after:transition-all after:duration-300 hover:after:w-full"
                >
                  GitHub
                </a>
              </div>
            </li>

            <li className="group bg-nutrigo-cream/60 rounded-3xl border border-nutrigo-brown/10 p-6 flex flex-col items-center text-center space-y-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl focus-within:ring-2 focus-within:ring-nutrigo-green">
              <img
                src={luisaBackesImg}
                alt="Luísa Backes"
                className="w-28 h-28 rounded-full object-cover bg-gray-200 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:ring-4 group-hover:ring-nutrigo-green/20"
              />

              <h3 className="font-semibold text-nutrigo-brown transition-colors duration-300 group-hover:text-nutrigo-green">
                Luísa Backes
              </h3>

              <div className="flex gap-4 text-sm font-medium">
                <a
                  href="https://www.linkedin.com/in/luisa-backes/"
                  target="_blank"
                  className="relative text-gray-500 transition-colors duration-300 hover:text-nutrigo-green focus-visible:outline-none after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-nutrigo-green after:transition-all after:duration-300 hover:after:w-full"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/luisabackes"
                  target="_blank"
                  className="relative text-gray-500 transition-colors duration-300 hover:text-nutrigo-green focus-visible:outline-none after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-nutrigo-green after:transition-all after:duration-300 hover:after:w-full"
                >
                  GitHub
                </a>
              </div>
            </li>

            <li className="group bg-nutrigo-cream/60 rounded-3xl border border-nutrigo-brown/10 p-6 flex flex-col items-center text-center space-y-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl focus-within:ring-2 focus-within:ring-nutrigo-green">
              <img
                src={marianaPiresImg}
                alt="Mariana Barbosa Pires"
                className="w-28 h-28 rounded-full object-cover bg-gray-200 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:ring-4 group-hover:ring-nutrigo-green/20"
              />

              <h3 className="font-semibold text-nutrigo-brown transition-colors duration-300 group-hover:text-nutrigo-green">
                Mariana Barbosa Pires
              </h3>

              <div className="flex gap-4 text-sm font-medium">
                <a
                  href="https://www.linkedin.com/in/marianabpires/"
                  target="_blank"
                  className="relative text-gray-500 transition-colors duration-300 hover:text-nutrigo-green focus-visible:outline-none after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-nutrigo-green after:transition-all after:duration-300 hover:after:w-full"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/MariPires96"
                  target="_blank"
                  className="relative text-gray-500 transition-colors duration-300 hover:text-nutrigo-green focus-visible:outline-none after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-nutrigo-green after:transition-all after:duration-300 hover:after:w-full"
                >
                  GitHub
                </a>
              </div>
            </li>

            <li className="group bg-nutrigo-cream/60 rounded-3xl border border-nutrigo-brown/10 p-6 flex flex-col items-center text-center space-y-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl focus-within:ring-2 focus-within:ring-nutrigo-green">
              <img
                src={miguelLewandowskiImg}
                alt="Miguel Leonardo Lewandowski"
                className="w-28 h-28 rounded-full object-cover bg-gray-200 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:ring-4 group-hover:ring-nutrigo-green/20"
              />

              <h3 className="font-semibold text-nutrigo-brown transition-colors duration-300 group-hover:text-nutrigo-green">
                Miguel Leonardo Lewandowski
              </h3>

              <div className="flex gap-4 text-sm font-medium">
                <a
                  href="https://www.linkedin.com/in/miguellewandowski/"
                  target="_blank"
                  className="relative text-gray-500 transition-colors duration-300 hover:text-nutrigo-green focus-visible:outline-none after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-nutrigo-green after:transition-all after:duration-300 hover:after:w-full"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/MiguelLewandowski"
                  target="_blank"
                  className="relative text-gray-500 transition-colors duration-300 hover:text-nutrigo-green focus-visible:outline-none after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-nutrigo-green after:transition-all after:duration-300 hover:after:w-full"
                >
                  GitHub
                </a>
              </div>
            </li>

            <li className="group bg-nutrigo-cream/60 rounded-3xl border border-nutrigo-brown/10 p-6 flex flex-col items-center text-center space-y-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl focus-within:ring-2 focus-within:ring-nutrigo-green">
              <img
                src={sandroCostaImg}
                alt="Sandro Costa Gomes"
                className="w-28 h-28 rounded-full object-cover bg-gray-200 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:ring-4 group-hover:ring-nutrigo-green/20"
              />

              <h3 className="font-semibold text-nutrigo-brown transition-colors duration-300 group-hover:text-nutrigo-green">
                Sandro Costa Gomes
              </h3>

              <div className="flex gap-4 text-sm font-medium">
                <a
                  href="https://www.linkedin.com/in/sandrocgomes/"
                  target="_blank"
                  className="relative text-gray-500 transition-colors duration-300 hover:text-nutrigo-green focus-visible:outline-none after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-nutrigo-green after:transition-all after:duration-300 hover:after:w-full"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/SandroCGs"
                  target="_blank"
                  className="relative text-gray-500 transition-colors duration-300 hover:text-nutrigo-green focus-visible:outline-none after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-nutrigo-green after:transition-all after:duration-300 hover:after:w-full"
                >
                  GitHub
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default About;
