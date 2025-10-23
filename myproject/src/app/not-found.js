import Link from "next/link";


export default function NotFound(){
     return <div>
          <h1> This page does not exists</h1>
          <Link href={"/"} >Back</Link>
     </div>
}