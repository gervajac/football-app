import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TodoList } from "../TodoList";
export interface AuthRouteProps {}

const AuthRoute: React.FC<AuthRouteProps> = (props) => {
  const { children }: any = props;

  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("")

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      
      if (user) {
        setLoading(false);
        user.getIdToken().then((token) => {
        setToken(token)
        })
        
      } else {
        console.log("unauthorized");
        navigate("/login");
      }
    });
    return () => AuthCheck();
  }, [auth]);

  if (loading) return <p>loading ...</p>;

  return (
    <>
      <>{children}</>  
      <TodoList token={token}/>
      </>
  )
};

export default AuthRoute;
