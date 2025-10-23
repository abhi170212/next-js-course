'use client'

import { useEffect, useState } from "react"

// useEffect 
// swr hook 


export default function clientDataFetch(){
     const [loading,setLoading] = useState(false);
     const [user,setUser] = useState([]);

     async function fetchListOfUsers(){
          try{
               setLoading(true);
               const apiCall = await fetch('https://dummyjson.com/users');
               const result = await  apiCall.json();

               if(result?.users){
                    setUser(result.users);
                    setLoading(false);
               }

          }catch(err){
               throw new Error(err);
               setUser([]);
               setLoading(false);
          }
     }
     useEffect(()=>{
          fetchListOfUsers();
     },[])

     if(loading) return <h3 className="text-extrabild text-3xl"> Loading ! Hold Tight🐧</h3>
     return <div>
          <h1>Client  side data fetching</h1>
          <div className="m-5 p-5 border-amber-200 border">
               <ul>
                    {
                         user && user?.length > 0 ? (
                              user.map((value)=>(
                                   <li key = {value.id} className="m-0 p-1 border m-2 border-amber-500">
                                        {value.firstName} {value.lastName}
                                   </li>
                              ))
                         ):(null)
                    }
               </ul>

          </div>
     </div>
}