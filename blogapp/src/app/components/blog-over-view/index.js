'use client'

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

function BlogOverView({ blog }) {
  const [openDialogue, setOpenDialogue] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [currentEditedBlodId,setCurrentEditedBlogId] = useState(null);

    //soft refresh ke liye 

  const router = useRouter() ;

  useEffect(()=>{
     router.refresh();
  },[])

  // Save blog function
  async function handleSaveBlogData() {
    try {
      setLoading(true);
      const apiResponse = currentEditedBlodId !== null ? await fetch(`/api/update-blog?id=${currentEditedBlodId}`,{
        method:"PUT",
        body:JSON.stringify(formData)
      }): await fetch("/api/add-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await apiResponse.json();

      if (result?.success) {
        setFormData({ title: "", description: "" });
        setOpenDialogue(false);
        setCurrentEditedBlogId(null);
        router.refresh(); // to do soft refresh
      }

      setLoading(false);
      console.log(result);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  // delete wala function
  async function handleDeleteBlogById(id){
     try{
          const apiResponse = await fetch(`/api/delete-blog?id=${id}`,{
               method:`DELETE`
          });
          console.log("DONE")
          const result = await apiResponse.json();
          if(result?.success) router.refresh();
     }catch(err){
          console.log(err);
     }
  }

  //update wala function 
  async function handleEdit(blog){

    // edit par click hoga to 
    // modal open hoga 
    // modal me same values rahega jo abhi hai 
    // isliye sirf item pass hoga , item_id nhi
    setCurrentEditedBlogId(blog?._id);
    // console.log(currentEditedBlodId)
    setFormData({
      title:blog.title,
      description:blog.description
    })
    setOpenDialogue(true);


  }
  return (
    <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-l from-green-300 p-6">
      {/* Add New Blog Button */}
      <div>
        <Button onClick={() => setOpenDialogue(true)}>NEW BLOG</Button>
      </div>

      {/* Dialog / Modal */}
      <Dialog open={openDialogue} onOpenChange={()=>{setOpenDialogue();setCurrentEditedBlogId(null)}} >
        <form>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{currentEditedBlodId? `Edit Blog`:`Add New Blog`}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-title">Title</Label>
                <Input
                  id="name-title"
                  name="title"
                  placeholder="Enter the title of the blog"
                  value={formData.title}
                  onChange={(evt) =>
                    setFormData({ ...formData, title: evt.target.value })
                  }
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="Enter the description"
                  value={formData.description}
                  onChange={(evt) =>
                    setFormData({ ...formData, description: evt.target.value })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button">Cancel</Button>
              </DialogClose>
              <Button type="button" onClick={handleSaveBlogData}>
                {loading ? "Saving Changes..." : "Save Changes"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>

      {/* Display Blogs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {blog && blog.length > 0 ? (
          blog.map((item) => (
            <Card key={item._id}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex gap-5">
                <Button variant="outline" className="cursor-pointer hover:bg-gray-100 hover:text-black"
                onClick={(evt)=>{
                  handleEdit(item)
                }}
                >Edit</Button>
                <Button variant="outline" className="cursor-pointer hover:bg-gray-100 hover:text-black" onClick={()=>{
                    handleDeleteBlogById(item._id)
                }}>Delete</Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
}

export default BlogOverView;
