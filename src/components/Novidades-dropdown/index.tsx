import Link from 'next/link';

const NovidadesDropdown = () => {
  return (
    <div className="absolute bg-white shadow-lg w-screen text-black z-10">
      <div className="flex space-x-20 py-14 px-36">
        <div>
          <h3 className="font-bold text-sm mb-4 uppercase">
            Últimos Lançamentos
          </h3>
          <ul className="space-y-5 text-sm">
            <li>
              <Link href="#">Crosslines</Link>
            </li>
            <li>
              <Link href="#">Bambooning + Geomatch</Link>
            </li>
            <li>
              <Link href="#">Raffia Circle</Link>
            </li>
            <li>
              <Link href="#">Lívia para Arezzo</Link>
            </li>
            <li>
              <Link href="#">Soul Silvia</Link>
            </li>
            <li>
              <Link href="#" className="underline mt-2 block text-xs">
                VER TUDO
              </Link>
            </li>
          </ul>
        </div>

        <div className="border-l border-gray-300 pl-8">
          <h3 className="font-bold text-sm mb-4 uppercase">Tendências</h3>
          <ul className="space-y-5 text-sm">
            <li>
              <Link href="#">Sapatilhas de Tela</Link>
            </li>
            <li>
              <Link href="#">Tamancos</Link>
            </li>
            <li>
              <Link href="#">Animal Print</Link>
            </li>
            <li>
              <Link href="#">Amarelo Manteiga</Link>
            </li>
            <li>
              <Link href="#">Kitten Heel</Link>
            </li>
            <li>
              <Link href="#" className="underline mt-2 block text-xs">
                VER TUDO
              </Link>
            </li>
          </ul>
        </div>

        <div className="border-l border-gray-300 pl-8">
          <h3 className="font-bold text-sm mb-4 uppercase">Mais Procurados</h3>
          <ul className="space-y-5 text-sm">
            <li>
              <Link href="#">Arezzo In Arezzo</Link>
            </li>
            <li>
              <Link href="#">Arezzo + Silvia Braz</Link>
            </li>
            <li>
              <Link href="#">Best Sellers</Link>
            </li>
            <li>
              <Link href="#">Clássicos</Link>
            </li>
            <li>
              <Link href="#" className="underline mt-2 block text-xs">
                VER TUDO
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NovidadesDropdown;
