import Image from "next/image";
import ZZLogo from '../../../public/Images/Logos/ZZLOGO.png'
import icon_favorite from '../../../public/Images/Icones/icon-favorite.png';
import icon_people from '../../../public/Images/Icones/icon-user.png';
import icon_bag from '../../../public/Images/Icones/icon-bag.png';
import icon_menu from '../../../public/Images/Icones/icon-menu.png'
import icon_local from '../../../public/Images/Icones/icon-local.png'
import { navButtons } from "../utils/nav-buttons";

export default function Header() {
    return (
        <>
            <header className="w-full h-24 p-5 flex">
                <div className="flex items-center xl:gap-10">
                    <div className="w-24 md:w-28 md:ml-2 lg:w-20 xl:w-24 xl:ml-4">
                        <Image
                            src={ZZLogo}
                            alt="Logo da Arezzo"
                            layout="responsive"
                            width={240}
                            height={100}
                            objectFit="contain"
                        />
                    </div>
                    <nav className="gap-8 hidden xl:flex">
                        {navButtons.map((button) => (
                            <button
                                key={button.id}
                                className="font-medium text-sm relative border-b-2 border-transparent hover:border-black transition-all duration-300 ease-in-out"
                            >
                                {button.text}
                            </button>
                        ))}
                        <div className="w-0.5 h-8 bg-black" />
                        <button className="font-medium text-sm relative border-b-2 border-transparent hover:border-black transition-all duration-300 ease-in-out">
                            BRIZZA
                        </button>
                    </nav>
                </div>
                <section className="w-full h-auto flex justify-end gap-3 xl:gap-4">
                    <div className="md:flex md:justify-center lg:w-full xl:w-auto xl:m-6">
                        <button className="gap-3 lg:flex lg:items-center">
                            <Image src={icon_local} alt="ícone de localização" width={32} className="hidden md:flex lg:w-6 xl:w-7" />
                            <p className="hidden lg:block lg:text-sm lg:underline lg:font-medium xl:text-xs ">ATIVE SUA LOCALIZAÇÃO</p>
                        </button>

                    </div>
                    <button>
                        <Image src={icon_favorite} alt="ícone de favoritos" className="w-6 md:w-8 lg:w-7 xl:w-7" />
                    </button>

                    <button>
                        <Image src={icon_people} alt="ícone de perfil" className="w-6 md:w-8 lg:w-7 xl:w-7" />
                    </button>

                    <button>
                        <Image src={icon_bag} alt="ícone de sacola" className="w-6 md:w-8 lg:w-7 xl:w-7" />
                    </button>

                    <button>
                        <Image src={icon_menu} alt="ícone de sacola" className="w-6 md:w-8 lg:w-7 xl:hidden" />
                    </button>
                </section>
            </header>
        </>
    )
}