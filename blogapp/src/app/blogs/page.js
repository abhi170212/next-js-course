
import BlogOverView from "../components/blog-over-view";

async function fetchListOfBlogs() {
  try {
    const apiResponse = await fetch(`http://localhost:3000/api/get-blogs`, {
      method: "GET",
      cache: "no-store",
    });

    const result = await apiResponse.json();
    return result?.data;
  } catch (err) {
    console.log(err);
  }
}

export default async function Blog() {
  const blogList = await fetchListOfBlogs();
  console.log("here", blogList);

  return <BlogOverView  blog={blogList}/>;
}
