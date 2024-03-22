import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUsername, setPassWord } from "../../store/userSlice";

const SignupComponent = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUsername(""));
    dispatch(setPassWord(""));
  }, []);
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    if (name.length !== 0 && password.length !== 0) {
      dispatch(setUsername(name));
      dispatch(setPassWord(password));
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center p-4 m-4">
      <div className="w-8/12 flex flex-col items-center p-4 bg-slate-200 rounded-lg">
        <h2 className="font-bold ">Sign Up</h2>
        <form
          className="flex m-4 flex-col gap-3 items-center"
          onSubmit={handleSignUp}
        >
          <label>Name</label>
          <input
            className="p-2 rounded-md"
            type="text"
            onChange={handleName}
            required
          />
          <label>Password</label>
          <input
            className="p-2 rounded-md"
            type="password"
            onChange={handlePassword}
            required
          />

          <button
            className="bg-black text-white p-2 rounded-lg m-4"
            type="submit"
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;
