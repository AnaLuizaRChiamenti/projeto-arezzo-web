import Image from 'next/image';
import img_second_banner from '/public/Images/Banner/second_banner.png';
import img_second_banner_2 from '/public/Images/Banner/second_banner_2.png';

export default function MainHome() {
  return (
    <div className="w-full h-screen md:h-auto md:items-end flex flex-wrap items-center py-3 px-8 2xl:py-16 2xl:px-32">

      <div className="w-1/2 lg:w-1/3 flex flex-col 2xl:self-stretch 2xl:justify-between">
        <div>
          <h1 className="text-sm font-bold mb-6 md:text-2xl">#LIVIAAREZZO</h1>
          <h2 className="text-xl font-bold uppercase mb-4 md:text-lg">Nova Coleção</h2>
        </div>
        <Image
          src={img_second_banner_2}
          className="w-36 md:w-full md:pr-1 lg:w-full xl:w-full 2xl:w-full"
          alt="Modelo Livia com o coturno preto e a sola tratorada rosa"
        />
      </div>

      <div className="w-1/2 lg:w-1/3 flex flex-col mt-6 md:mt-0 lg:flex-row lg:items-end">
        <Image
          src={img_second_banner}
          className="w-36 md:w-full md:pl-1 lg:w-full xl:w-full 2xl:w-full"
          alt="Modelo Livia com o coturno preto e a sola tratorada rosa"
        />
      </div>

      <div className="w-full flex flex-col bg-white p-4 text-center md:w-full lg:w-1/3 lg:text-left">
        <p className="font-semibold lg:text-lg">Conheça o novo coturno</p>
        <p className="text-gray-500 mb-4 lg:text-xl">Livia Arezzo</p>
        <button className="text-sm bg-black text-white px-6 py-2 rounded-full lg:w-2/2 lg:text-xl xl:w-1/2">
          Ver coleção
        </button>
      </div>
    </div>
  )
}