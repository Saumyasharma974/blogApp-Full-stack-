import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Devotional() {
  const { blogs=[], isLoadingBlogs } = useAuth(); // Get blogs and loading state
  const categoryToFilter = "Devotion"; // Replace with dynamic value
  const devotionalBlogs = blogs?.filter((blog) => blog.category === categoryToFilter);
  

  console.log("Devotional Blogs:", devotionalBlogs);

  return (
    <div>
      <div className="container mx-auto my-12 p-4">
        <h1 className="text-2xl font-bold mb-6">Devotional</h1>
        <p className="text-center mb-8">
          The concept of gods varies widely across different cultures,
          religions, and belief systems
        </p>

        {isLoadingBlogs ? (
          <div className="flex h-screen items-center justify-center">
            <p>Loading blogs...</p>
          </div>
        ) : devotionalBlogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {devotionalBlogs.map((blog, index) => (
              <Link
                to={`/blog/${blog._id}`}
                key={index}
                className="relative rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={blog?.blogImage?.url}
                  alt={blog?.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-lg font-semibold">{blog?.title}</h2>
                  <p className="text-sm">{blog?.category}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex h-screen items-center justify-center">
            <p>No blogs found in the "Devotion" category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Devotional;