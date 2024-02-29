import { useState } from "react";
import Button from "../ui components/Button";
import Header from "../ui components/Header";
import { useAuth } from "../AuthProvider";
import axios from "axios";
import LoginInputForm from "../feature components/LoginInputForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const inputs = ["Email", "Password"];
  const styles = "form-control border-dark";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const { saveToken, saveUsername } = useAuth();

  const handleLogin = async () => {
    setLoginError("");
    try {
      const credentials = `${username}:${password}`;
      const response = await axios.post(
        "http://localhost:5073/api/auth/login",
        null, // no body
        {
          headers: {
            "Content-Type": "application/json",
            credentials: `${credentials}`,
          },
        }
      );

      const data = response.data;
      console.log("Login successful:", data);
      const { token } = response.data;
      saveToken(token);
      saveUsername(username);
      window.location.href = "/assignments";
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-center gap-5"
      style={{ height: "70vh" }}
    >
      <Header title="Sign in" />
      <div
        className="container d-flex flex-column gap-4"
        style={{ width: "40vh" }}
      >
        <LoginInputForm
          inputs={inputs}
          styles={styles}
          onInputChange={(index, value) =>
            index === 0 ? setUsername(value) : setPassword(value)
          }
        />

        <div
          className="d-flex flex-column text-center"
          style={{ width: "100%" }}
        >
          <Button name="Log in" onClick={handleLogin} color="btn-dark" />
          {loginError && <p style={{ color: "red" }}>{loginError}</p>}
          <Link to="/reset">
            <Button name="Reset password" color="" />
          </Link>

          <Link to="/register">
            <Button name="No account? Register" color="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
