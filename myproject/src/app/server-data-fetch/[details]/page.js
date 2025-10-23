
async function fetchEachuser(currentId){
  try{
     const apiCall =  await fetch(`https://dummyjson.com/users/${currentId}`,{cache:'no-store'})
     const result = await apiCall.json();
     return result;
  }catch(err){
     throw new Error(err);
  }
}
export default  async function userDetails({params}){
   const paramsAns = await params ;
   console.log(paramsAns);

   const userDetails = await fetchEachuser(paramsAns.details);

     return <div>
          <h2>Hey world! The user is {userDetails?.firstName} {userDetails?.lastName}</h2>
          <h2> {userDetails?.age} {userDetails?.phone}</h2>
          <h2> {userDetails?.birthDate} {userDetails?.height}</h2>
     </div>
}