
// fetch method 

import Link from "next/link";

async function fetchListOfUsers(){
try{
     const apiResponse = await fetch('https://dummyjson.com/users',{cache:'no-store'})
     // in caching , 'force-store' is default
     // in nextjs , data is fetched then it uses caching to store data.
     // it does not call api , it uses caching to get the data.
     const result = await apiResponse.json();
     return result;
}catch(err){
 throw new Error(err);
}
}

export default async function serverDataFetch(){
     const listOfUsers = await fetchListOfUsers();
     console.log("list of users" ,listOfUsers);
     return <div>
          <h1>Hey , This is server speaing🔊 :user List Page</h1>
           <ul>
        {listOfUsers?.users?.length > 0 ? (
          listOfUsers.users.map((user) => (
            <li key={user.id}><Link href={`/server-data-fetch/${user.id}`}>{user.firstName} {user.lastName}</Link></li>
          ))
        ) : (
          <li>No users found</li>
        )}
      </ul>
     </div>
}