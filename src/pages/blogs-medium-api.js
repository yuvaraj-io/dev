import React, { useEffect, useState } from "react";
import { getMediumBlogs } from "../services/medium";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        setLoading(true);
        
        const fetchedBlogs = await getMediumBlogs();
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Medium Blogs</h1>
      {loading ? (
        <p>Loading...</p>
      ) : blogs.length > 0 ? (
        <ul>
          {blogs.map((blog, index) => (
            <li key={index}>
              <a href={blog.link} target="_blank" rel="noopener noreferrer">
                <h2>{blog.title}</h2>
              </a>
              <p>{blog.pubDate}</p>
              <p dangerouslySetInnerHTML={{ __html: blog.description }}></p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
}
