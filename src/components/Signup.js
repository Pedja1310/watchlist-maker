import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

import { signup } from "../store/entities/user";
import ErrorMessage from "./ErrorMessage";

import Input from "./Input";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        history.push("/movie/popular");
      }
    });
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) {
      setError("Username not found.");
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        userCredentials.user
          .updateProfile({
            displayName: username,
          })
          .then(() => {
            dispatch(
              signup({
                email: userCredentials.user.email,
                uid: userCredentials.user.uid,
                displayName: username,
              })
            );
          });
      })
      .then(() => {
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <div className="container mx-auto mt-4 flex flex-col items-center mb-20">
      <h2 className="text-lg font-bold uppercase text-gray-500">Sign Up</h2>
      {error && <ErrorMessage message={error} />}
      <form
        className="w-2/3 flex intems-center flex-col"
        onSubmit={handleSubmit}
      >
        <Input
          label="Username"
          type="text"
          id="username"
          value={username}
          onChangeHandler={setUsername}
        />
        <Input
          label="Email"
          type="email"
          id="email"
          value={email}
          onChangeHandler={setEmail}
        />
        <Input
          label="Password"
          type="password"
          id="password"
          password={password}
          onChangeHandler={setPassword}
        />
        <Link to="/login" className="block mt-4 text-blue-600">
          Already have an account?
        </Link>
        <button
          type="submit"
          className="mt-10 text-gray-500 border px-6 py-2 font-bold rounded border-gray-500 uppercase hover:text-gray-100 hover:bg-gray-500 focus:outline-none transition duration-150 z"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
