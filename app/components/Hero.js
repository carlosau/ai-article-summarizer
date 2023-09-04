import Image from "next/image";
import { GrShareOption } from "react-icons/gr";

export default function Hero() {
  return (
    <div>
      <header className="w-full flex flex justify-center items-center flex-col">
        <nav className="flex w-full justify-between items-center mx-20">
          <Image src="img/logo.svg" alt="logo" width={200} height={200} />
          <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
            <GrShareOption color="white"/>
          </button>
        </nav>
      </header>

      <h1 className="text-3xl font-bold text-center mt-20">
        Resumo de link com ChatGPT-4,
      </h1>
      <p className="text-center font-bold text-3xl bg-gradient-to-r from-rose-500 via-sky-600 to-yellow-500 bg-clip-text text-transparent">
        Cole o link abaixo e obtenha o seu resumo!
      </p>
    </div>
  );
}
