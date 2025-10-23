import ReceipeList from "@/components/receipe-list";
import Details from "@/components/receipe-list/details";


async function fetchReceipeDetails(id){
     try{
       const apiRes = await fetch(`https://dummyjson.com/recipes/${id}`);
       const result = await apiRes.json();
       return result;
     }catch(err){
          throw new Error(err);
     }
}

export default async  function ReceipeDetails({params}){

     const paramsAsync = await params;
     const receipeDetails = await fetchReceipeDetails(paramsAsync.details);

     return <div>
          <Details details={receipeDetails}/>
     </div>
}