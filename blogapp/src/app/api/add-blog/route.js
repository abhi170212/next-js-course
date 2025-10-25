import connectDB from "@/app/database";
import Blog from "@/app/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";

// validation ke liye schema 
// isme aur mongoose wale schema me differencehot ahai 
const AddNewBlog = Joi.object({
     title:Joi.string().required(),
     description:Joi.string().required()
})


export async function POST(req){
     try{
          await connectDB();
          const extractedData = await req.json();
          const{title,description} = extractedData;
          // ye method check krne ke liye hai 
          const{error} = AddNewBlog.validate({
               title,description
          });

          if(error){
               return NextResponse.json({
                    sucess:false,
                    message:error.details[0].message
               })
          }

          // save data in database

          const newlyCreatedItem = await Blog.create(extractedData);
          if(newlyCreatedItem) {
               return NextResponse.json({
                    sucess:true,
                    message:`Blog added successfully`
               })
          }else{
               return NextResponse.json({
                    sucess:false,
                    message:`Something went wrong`
               })
          }

     }catch(error){
          console.log(error);
          return NextResponse.json({
               sucess:false,
               message:`Something went wrong !🧐`
          })
     }
}