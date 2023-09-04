import Image from "next/image";
import Hero from "./components/Hero";
import Demo from "./components/Demo";

export default function Home() {
  return (
    <div className="p-10 min-h-screen bg-gradient-to-r from-[#f3e7e9] via-[#e3eeff] to-[#fcefee]">
      <div className="flex flex-col justify-between items-center">
        <Image src="img/logo.svg" alt="logo" width={200} height={200} />
      </div>
    
      <Hero />
      <Demo />

    </div>

  );
}
