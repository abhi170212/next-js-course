import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";

export default function ReceipeList({ list }) {
  return (
    <div className="p-6">
      {/* Back Link */}
      <Link
        href="/"
        className="inline-block mb-6 text-blue-600 hover:underline font-medium"
      >
        ← Home Page
      </Link>

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        Recipes
      </h2>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {list && list.length > 0 ? (
          list.map((value) => (
            <Link key={value?.id} href={`/receipe-list/${value?.id}`}>
              <Card className="hover:shadow-lg hover:scale-[1.03] transition-all duration-200 cursor-pointer">
                <CardHeader className="p-0">
                  <img
                    src={value?.image}
                    alt={value?.name}
                    className="w-full h-60 object-cover rounded-t-lg"
                  />
                </CardHeader>

                <CardContent className="p-4">
                  <CardTitle className="text-lg font-semibold text-gray-800">
                    {value?.name}
                  </CardTitle>
                </CardContent>

                <CardFooter className="p-4 pt-0 text-gray-500 text-sm">
                  Tap to view details →
                </CardFooter>
              </Card>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No recipes found.
          </p>
        )}
      </div>
    </div>
  );
}
