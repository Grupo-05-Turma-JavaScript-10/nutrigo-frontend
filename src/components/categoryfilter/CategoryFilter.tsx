import { useState, useEffect } from 'react';
import { listCategories } from '../../services/Service';

interface Categoria {
  id: number;
  descricao: string;
}

interface Props {
  onCategoryChange: (categoryId: number | null) => void;
  onHealthyChange: (isHealthy: boolean) => void;
}

const CategoryFilter = ({ onCategoryChange, onHealthyChange }: Props) => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isOn, setIsOn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        await listCategories(setCategorias);
      } catch (err) {
        setError('Falha ao carregar categorias');
      } finally {
        setLoading(false);
      }
    };
    fetchCategorias();
  }, []);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    onHealthyChange(newState);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const categoryId = value === '' ? null : parseInt(value);
    setSelectedCategory(categoryId);
    onCategoryChange(categoryId);
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <div className="max-w-6xl w-full border border-gray-200 rounded-2xl bg-white p-8 shadow-sm mx-auto">
        <div className="flex items-center justify-between mb-8 bg-[#F9FAFB] rounded-[14px] p-4">
          <div className="flex items-center gap-3">
            <img 
              src="/src/assets/leaf-icon.svg"
              alt="Folha" 
              className="w-5 h-5 object-contain"
            />
              <h1 className="text-base font-bold text-gray-900 font-nutrigo">Os mais saudáveis</h1>
        </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-600 font-nutrigo">Off</span>
            <div 
              className={`w-14 h-7 ${isOn ? 'bg-nutrigo-green' : 'bg-gray-300'} rounded-full relative cursor-pointer`}
              onClick={handleToggle}
            >
              <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${isOn ? 'translate-x-7' : 'translate-x-1'}`} />
            </div>
            <span className="text-gray-900 font-semibold font-nutrigo">On</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2 font-nutrigo">
            Categorias
          </label>
          <div className="relative">
            <select 
              value={selectedCategory || ''}
              onChange={handleCategoryChange}
              className="w-full p-4 rounded-[10px] bg-[#658c48]/10 border-l-4 border-nutrigo-green text-[#4A5565] appearance-none cursor-pointer font-nutrigo text-base focus:outline-none focus:ring-0"
            >
              <option value="">Todas as categorias</option>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.descricao}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#4A5565]">
              ▼
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;