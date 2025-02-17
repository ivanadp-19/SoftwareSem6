import Image from "next/image";
import { Rectangle } from "../components/rectangle";

// a 3 row grid of rectangles
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-6xl font-bold mt-6">Texto</h1>
      <h2>subtexto</h2>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Boton </button> 
    </div>
  );
}