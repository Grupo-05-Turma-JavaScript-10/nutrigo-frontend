const HomeHero = () => {
  return (
    <div className="px-4 py-16 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        <div className="flex-1 text-left">
          <h1 className="font-nutrigo text-4xl md:text-5xl lg:text-[48px] font-bold mb-4">
            <span className="text-nutrigo-brown">Vida Saudável</span>
            <br />
            <span className="text-nutrigo-green">Começa Aqui</span>
          </h1>
          
          <p className="text-[#4A5565] text-base md:text-lg mb-8 max-w-2xl">
            Descubra refeições frescas e orgânicas entregues diretamente na sua porta. 
            Alimente seu corpo com nossa seleção cuidadosamente elaborada de opções 
            nutritivas e deliciosas.
          </p>
          
          <button className="bg-nutrigo-green text-white font-semibold py-3 px-8 rounded-[44739200px] flex items-center gap-2 hover:opacity-90 transition-opacity">
            Peça Agora
            <span>→</span>
          </button>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/src/assets/hero.svg"
            alt="Refeição saudável"
            className="rounded-full w-72 h-72 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;