import Image from 'next/image';
import img_second_banner from '/public/Images/Banner/second_banner.png';
import img_second_banner_2 from '/public/Images/Banner/second_banner_2.png';

export default function MainHome() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between w-full h-screen p-8">
            <div className="lg:w-1/2 w-full flex flex-col items-start justify-center">
                <h2 className="text-xl font-bold uppercase mb-4">Nova Coleção</h2>
                <h1 className="text-3xl font-bold mb-6">#LIVIAAREZZO</h1>
            </div>

            <div className="lg:w-1/2 w-full relative flex items-center justify-end">
                <Image src={img_second_banner_2} className='object-cover w-full h-full lg:w-auto lg:h-auto' alt='Modelo Livia com o coturno preto e a sola tratorada rosa' />
                <Image src={img_second_banner} className='object-cover w-full h-full lg:w-auto lg:h-auto' alt='Modelo Livia com o coturno preto e a sola tratorada rosa' />

                <div className="absolute bottom-10 right-10 bg-white p-4 text-right">
                    <p className="font-semibold">Conheça o novo coturno</p>
                    <p className="text-gray-500 mb-4">Livia Arezzo</p>
                    <button className="bg-black text-white px-6 py-2 rounded-full">Ver coleção</button>
                </div>
            </div>
        </div>
    )
}