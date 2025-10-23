import ReceipeList from "@/components/receipe-list";

async function fetchListOfReceipes(){
     try{
          const apiRes = await fetch(`https://dummyjson.com/recipes`);
          const data = await apiRes.json();
          return data?.recipes;
     }catch(err){
          throw new Error(err);
     }
}



export default async  function receiptList(){

     const recipeList = await fetchListOfReceipes();

     return <ReceipeList list={recipeList}/>
}