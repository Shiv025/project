import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [allUserData, setAllUserData] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("allUser")) || [];
    setAllUserData(data);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("please fill all the details");
    } else {
      let user = allUserData.find((ele) => ele.email === email);
      if (!user) {
        alert("Email doesn't exist");
      } else {
        if (user.password != password) {
          alert("Incorrect password");
        } else {
          localStorage.setItem("currentUser", JSON.stringify(user));
          localStorage.setItem("isLoggedIn", true);
          navigate("/home");

          alert("Login Successful");
        }
      }
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen dark min-h-[100vh] bg-[#9F9F9F]">
        <div className="w-2/5 bg-gray-800 rounded-lg shadow-md p-6 ">
          <h2 className="text-2xl text-center font-bold text-gray-200 mb-4">
            Login
          </h2>

          <form
            id="loginDetails"
            className="flex flex-col items-center gap-2"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="email"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[90%] "
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[90%] "
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 w-fit"
            >
              Submit
            </button>
            <p className=" text-gray-200">Don't have an account?</p>

            <Link to="/">
              <button className="text-xl text-white font-bold">
                Register here
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
