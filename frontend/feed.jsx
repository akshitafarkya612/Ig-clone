import { useEffect, useState } from "react";
import api from "../api";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts/feed").then(res => setPosts(res.data));
  }, []);

  return posts.map(p => (
    <div key={p._id}>
      <img src={p.image} width="250" />
      <p>{p.caption}</p>
      <p>❤️ {p.likes.length}</p>
      {p.comments.map((c, i) => (
        <p key={i}><b>{c.user.username}:</b> {c.text}</p>
      ))}
    </div>
  ));
}
