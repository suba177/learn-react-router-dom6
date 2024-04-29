import { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

export default function Blogpage() {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const query = form.search.value;

    setSearchParams({ post: query });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Our news</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="search" name="search" />
        <input type="submit" value="Search" />
      </form>
      {posts
        .filter((post) => post.title.includes(postQuery) && post.id <= 20)
        .map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
    </div>
  );
}
