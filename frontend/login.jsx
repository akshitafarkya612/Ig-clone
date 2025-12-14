import api from "../api";

export default function Login() {
  const login = async () => {
    const res = await api.post("/auth/login", {
      username: "test",
      password: "test"
    });
    localStorage.setItem("token", res.data.token);
    window.location = "/feed";
  };

  return <button onClick={login}>Login</button>;
}
