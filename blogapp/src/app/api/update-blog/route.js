import connectDB from "@/app/database";
import Blog from "@/app/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";


const EditBlog = Joi.object({
     title:Joi.string().required(),
     description:Joi.string().required()
})

export async function PUT(req){
     try{
          await connectDB();
          const {searchParams} = new URL (req.url);
          const getCurrentBlogId = searchParams.get(`id`);

          if(!getCurrentBlogId){
               return NextResponse.json({
                    success:false,
                    message:`Blog ID is required`
               })
          }
          const {title,description} = await req.json();


          const{error} = EditBlog.validate({
                         title,description
                    });
          
                    if(error){
                         return NextResponse.json({
                              sucess:false,
                              message:error.details[0].message
                         })
                    }
          

          const updatedBlog = await Blog.findOneAndUpdate({
               _id:getCurrentBlogId
          },{
               title,description
          },{new:true})

          if(updatedBlog) {
               return NextResponse.json({
                    success:true,
                    message:`Blog is updated successfully`
               })
          }else{
                return NextResponse.json({
                    success:true,
                    message:`Something went wrong!`
          })
          }
     }catch(error){
          console.log(error);
          return NextResponse.json({
               success:true,
               message:`Something went wrong!`
          })
     }
}