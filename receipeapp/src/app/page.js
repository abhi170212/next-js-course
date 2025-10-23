import Image from "next/image";
import Link from "next/link";

export default function Home() {
 return <div>
   <h1> Receipe APP </h1>
    <Link href={`/receipe-list`}> Explore Receipe</Link>
 </div>
}
