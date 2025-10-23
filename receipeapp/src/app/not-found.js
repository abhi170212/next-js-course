import Link from "next/link"


export default function notFound(){
     return <div>
          <h1> This page can not be bye.</h1>
          <h1> <Link href={`/`}> Home Page</Link></h1>
     </div>
}