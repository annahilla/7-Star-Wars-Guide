import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { setUser, logout } from "../redux/authSlice";

const AuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ email: user.email || "" }));
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe()
  }, [dispatch]);

  return null;
};

export default AuthListener;
