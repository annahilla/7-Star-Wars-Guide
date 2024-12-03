import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { signUpUser } from "../redux/authActions";
import UserForm from "../components/UserForm";
import { useLocation, useNavigate } from "react-router-dom";
import { setError } from "../redux/authSlice";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    if (isLoggedIn) {
      const redirectTo = location.state?.from?.pathname || "/";
      navigate(redirectTo, { replace: true });
    }
  }, [isLoggedIn]);


  const handleSignUp = async () => {
    try {
      await dispatch(signUpUser({ email, password })).unwrap();
    } catch (err) {
      console.error("Error during sign up:", err);
    }
  };

  useEffect(() => {
    return () => {
      dispatch(setError(""));
    };
  }, [dispatch]);

  return (
    <UserForm
      title="Sign Up"
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={handleSignUp}
    />
  );
};

export default SignUpPage;
