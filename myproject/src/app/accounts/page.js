

import { redirect } from "next/navigation";

// make sure krna ki folder ka naam small ho , warna lega nhi url me 

export default function Accounts(){
      const userProfileInfo = null;
     if(userProfileInfo === null) 
          // redirect('cart?search=product1&randomvalue=abcde') 
     redirect('products?search=product1')

     return (
          <h1>
               Hey this is the accounts page.
          </h1>
     )
}