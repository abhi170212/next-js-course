

export default async  function DynamicRoute({params}){
     // isme url me -> 3000/products/slug
     // this one or only one slug as folder name is [details] 


     // what if i want to know ki kaun sa slug hai ? 
     // then go for {params} props 
     let answerParams = await params
     console.log(answerParams)

     // isme mere me async function lagane padega aur await bhi likhna padega.
     return <h2>this is a dynamic route </h2>
}