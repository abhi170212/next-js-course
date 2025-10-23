'use client'

import { useEffect, useState } from "react"
import useSWR from "swr";

// useEffect 
// swr hook 
const fetcher = (...args) => fetch(...args).then((res)=> res.json());

export default function clientDataFetch(){

     const {data,error,isLoading} = useSWR("https://dummyjson.com/users",fetcher);

     if(error) {
          return <div>Failed to load DATA !</div>
     }
     if(isLoading) return (
          <h3 className="font-extrabold text-3xl"> Loading ! WAIT </h3>
     )

     return <div>
          <h1>Client  side data fetching</h1>
          <div className="m-5 p-5 border-amber-200 border">
               <ul>
                    {
                         data && data?.users && data?.users?.length > 0 ? (
                              data.users.map((value)=>(
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