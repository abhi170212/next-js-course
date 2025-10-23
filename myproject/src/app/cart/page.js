'use client'

import { usePathname, useSearchParams } from "next/navigation"

export default function cartFunction(){
     // url is loclahost/cart?search=product1&randomvalue=abcde
     const pathName = usePathname();
     console.log(pathName) // output => cart 


     // ? ( question mark ke baad a sara ye deta hai)
     const searchParams = useSearchParams();
     console.log(searchParams.get('search'));
     console.log(searchParams.get('randomvalue'));

     return (
     <div>
          This is the cart 
     </div>
     )
}