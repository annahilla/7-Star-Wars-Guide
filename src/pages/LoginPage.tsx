import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { loginUser } from "../redux/authActions";
import UserForm from "../components/UserForm";
import { useLocation, useNavigate } from "react-router-dom";
import { setError } from "../redux/authSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const error = useSelector((state: RootState) => state.auth.error);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async () => {
    try {
      await dispatch(loginUser({ email, password })).unwrap();
      const redirectTo = location.state?.from?.pathname || "/";
      navigate(redirectTo); 
    } catch (err) {
      console.error("Error during sign up:", err);
    };
  };

  useEffect(() => {
    return () => {
      dispatch(setError(""));
    };
  }, [dispatch]);

  return (
    <UserForm
      title="Log In"
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      error={error}
      onSubmit={handleLogin}
    />
  );
};

export default LoginPage;
