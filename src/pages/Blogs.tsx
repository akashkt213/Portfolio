import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    id: 1,
    title: "Building Beautiful Interfaces with Shadcn UI",
    date: "October 10, 2025",
    description:
      "Learn how to create modern, accessible, and highly customizable UI components using the Shadcn UI library with React and Tailwind CSS.",
  },
  {
    id: 2,
    title: "Improving Performance in React Apps",
    date: "September 25, 2025",
    description:
      "A guide to optimizing React applications — from memoization and lazy loading to code-splitting and efficient rendering techniques.",
  },
  {
    id: 3,
    title: "Integrating Stripe Payments in React",
    date: "August 15, 2025",
    description:
      "Step-by-step tutorial on integrating Stripe for seamless and secure online payments in your React-based e-commerce projects.",
  },
];

export function Blogs() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-10">
      <div className="max-w-4xl w-full text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          My Blogs
        </h2>
        <p className="text-muted-foreground text-lg">
          I love sharing what I learn — here are some of my latest thoughts,
          tutorials, and discoveries in web development.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {blogs.map((blog) => (
          <Card key={blog.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">
                {blog.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{blog.date}</p>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-between h-full">
              <p className="text-muted-foreground mb-4">{blog.description}</p>
              <Button variant="outline" className="w-full">
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
