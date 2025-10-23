


export default async function Products({searchParams}){
     let ans = await searchParams;
     console.log(ans);
     console.log(ans.search)
     return (
          <h1>Hey this is theeeeeee products</h1>
     )
}