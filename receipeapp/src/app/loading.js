import { Skeleton } from "@/components/ui/skeleton";

// first instakll the shadcn Ui library 
// second install a component 
// third it will automatically create a folder named components 
// import and use that folder.

export default function Loading(){
     return <div className="w-full min-h-screen">
        <Skeleton/>
          </div>
}