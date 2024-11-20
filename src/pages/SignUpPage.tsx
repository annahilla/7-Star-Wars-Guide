import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { signUpUser } from "../redux/authActions";
import UserForm from "../components/UserForm";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const error = useSelector((state: RootState) => state.auth.error);

  const handleSignUp = () => {
    dispatch(signUpUser({ email, password }));
  };

  return (
    <UserForm
      title="Sign Up"
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      error={error}
      onSubmit={handleSignUp}
    />
  );
};

export default SignUpPage;
