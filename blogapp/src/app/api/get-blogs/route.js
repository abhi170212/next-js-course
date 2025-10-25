import connectDB from "@/app/database";
import Blog from "@/app/models/blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const extractAllBlogsFromDatabase = await Blog.find({});
    if (extractAllBlogsFromDatabase) {
      return NextResponse.json({
        success: true,
        data: extractAllBlogsFromDatabase,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Server error",
    });
  }
}
