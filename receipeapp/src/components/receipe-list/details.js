import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

export default function Details({ details }) {
  return (
    <div>
     <button className="border border-amber-950 p-2 m-2 rounded-full hover:bg-amber-500 transition-color"><Link href={`/`}>Home</Link></button>
     <button className="border border-amber-950 p-2 m-2 rounded-full hover:bg-amber-500 transition-color"><Link href={`/receipe-list`}>Receipe List</Link></button>
      <Card className="max-w-md mx-auto p-4 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{details?.name}</CardTitle>
        </CardHeader>

        <CardContent>
          <img
            src={details?.image}
            alt={details?.name}
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
        </CardContent>

        <CardDescription>
          {Array.isArray(details?.instructions) &&
            details.instructions.map((val, id) => (
              <p key={id} className="text-sm text-gray-700 mb-1">
                {val}
              </p>
            ))}
        </CardDescription>
      </Card>
    </div>
  )
}
