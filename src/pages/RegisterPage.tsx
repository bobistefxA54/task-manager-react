import axios, { AxiosError } from "axios";
import { useState } from "react";
import Header from "../ui components/Header";
import LoginInputForm from "../feature components/LoginInputForm";
import Button from "../ui components/Button";

const RegisterPage = () => {
  const inputs = ["Email", "Password"];
  const styles = "form-control dark";

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [borderColor, setBorderColor] = useState("black");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Updated to handle string or null

  const handleEmailValidation = async () => {
    if (email.trim() !== "") {
      try {
        const response = await axios.get(
          `http://localhost:5073/api/auth/checkEmail?email=${email}`
        );
        setBorderColor(response.data.emailExists ? "red" : "green");
        setButtonDisabled(response.data.emailExists);
      } catch (error) {
        console.error("Email validation error:", error);
      }
    } else {
      setBorderColor("dark");
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5073/api/auth/register",
        {
          email: email,
          password: password,
        }
      );
      const data = response.data;
      console.log("Registration successful:", data);
    } catch (error) {
      console.error("Registration error:", error);
      if (axios.isAxiosError(error)) {
        // If error.response.data is an array of strings, join them into a single string
        if (Array.isArray(error.response?.data)) {
          setErrorMessage(error.response.data.join(", "));
        } else {
          setErrorMessage(error.response?.data);
        }
      }
    }
  };

  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center gap-5"
      style={{ height: "70vh" }}
    >
      <Header title="Register" />
      <div
        className="d-flex flex-column justify-content-center gap-4"
        style={{ width: "40vh" }}
      >
        <LoginInputForm
          inputs={inputs}
          styles={styles}
          emailColor={borderColor}
          onBlur={handleEmailValidation}
          onInputChange={(index, value) => {
            index === 0 ? setEmail(value) : setPassword(value);
            setErrorMessage(null);
          }}
        />
        {errorMessage && <div className="text-danger">{errorMessage}</div>}{" "}
        <Button
          onClick={handleRegister}
          name="Register"
          color="btn-dark"
          disabled={buttonDisabled}
        />
      </div>
    </div>
  );
};

export default RegisterPage;
