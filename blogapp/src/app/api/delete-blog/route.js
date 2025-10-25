import connectDB from "@/app/database"
import Blog from "@/app/models/blog";
import { NextResponse } from "next/server"


export  async function DELETE(req){
     try{
          await connectDB();
          const {searchParams} = new URL(req.url);
          const getCurrentBlogId =searchParams.get(`id`);

          if(!getCurrentBlogId){
               return NextResponse.json({
                    success:false,
                    message:`Blog ID is not here`
               })
          }

          const deleteCurrentBlogId = await Blog.findByIdAndDelete(getCurrentBlogId);
          if(deleteCurrentBlogId){
               return NextResponse.json({
                    success:true,
                    message:`Blog is Deleted Successfully`
               })
          }else{
              return NextResponse.json({
               success:false,
               message:`Error Happened ! Try next time.`
               })
          }

     }catch(err){
          console.log(err)
          return NextResponse.json({
               success:false,
               message:`Error Happened ! Try next time.`
          })
     }
}