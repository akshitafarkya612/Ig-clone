import api from "../api";
import { useEffect, useState } from "react";

export default function Profile({ id }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get(`/users/${id}`).then(res => setUser(res.data));
  }, []);

  if (!user) return null;

  return (
    <>
      <h2>{user.username}</h2>
      <p>Followers: {user.followers.length}</p>
      <p>Following: {user.following.length}</p>
    </>
  );
}
