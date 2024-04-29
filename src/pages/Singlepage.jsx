import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Singlepage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState([]);

  const goBack = () => navigate("/posts", { state: 123 });
  const goHome = () => navigate("/", { replace: true });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      {post && (
        <>
          <button onClick={goBack}>Go back</button>
          <button onClick={goHome}>Go home</button>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`} style={{ color: "red" }}>
            Edit this post
          </Link>
        </>
      )}
    </div>
  );
}
