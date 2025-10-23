'use client' 
import Link from "next/link";
import { useRouter } from "next/navigation";
// by this we can make it a client page and we can use all react hooks 



export default function Home() {

  const router = useRouter();
  console.log(router); // return the object inside the router 
  function handleNavigate(){
    router.push('products') // psuh is one of the method inside that obj.
  }



  return (
   <div className="flex min-h-screen flex-col items-center  p-24">
    hello world 
    <Link href={'products'}>Products</Link>
    <Link href={'accounts'}>accounts</Link>

    {/*-> Another way of Navigation is 
      -> useRouter -> next/navigation package
      -> when using make sure to make client page
    */}
    
    <h2>0  Alternative way of doing that 0</h2>
    <button onClick={handleNavigate} className="cursor-pointer">PRODUCTS</button>
    
   </div>
  );
}
