import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center item-center bg-gradient-to-l from-green-300 ">

      <div className="container mx-auto flex  flex-col justify-center items-center">
        <h2 className="text-4xl text-black font-bold mb-4">BROWSE BLOG COLLECTIONS</h2>
        <Link href={`/blogs`} className="bg-white text-large text-green-800 px-3 py-3 rounded-4xl transition-transform duration-300 hover:scale-110"> Explore✋🏽</Link>
      </div>

    </div>
  );
}
