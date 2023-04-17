import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState(""); // email(user)
  const [password, setPassword] = useState(""); // password
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const admin = currentUser?.isAdmin;
  const token = currentUser?.accessToken;

  useEffect(() => {
    if (token && admin) {
      navigate("/", { replace: true });
      setTimeout(() => {
        window.location.reload(true);
      }, 10);
    } else if (admin === false) {
      alert("You are not an admin");
      navigate("/login");
    } else {
      navigate("/login");
    }
  }, [token, admin, navigate]);

  function handleClick(e) {
    try {
      e.preventDefault();
      if (email && password) {
        login(dispatch, { email, password });
      }
    } catch (err) {
      console.log(err);
    }
    if (email === "" || password === "") {
      alert("Please fill in all fields");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
      <input
        style={{
          padding: 10,
          marginBottom: 20,
        }}
        type='text'
        placeholder='email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={{
          padding: 10,
          marginBottom: 20,
        }}
        type='password'
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleClick}
        style={{
          padding: 10,
          marginBottom: 20,
          backgroundColor: "lightblue",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
          width: 100,
        }}>
        Login
      </button>
    </div>
  );
}

export default Login;
