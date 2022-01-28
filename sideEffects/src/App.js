import React, {useContext} from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext, { /**AuthContextProvider */ } from "./store/auth-context";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(
  //   localStorage.getItem("isLoggedIn") === "1"
  // );
  
  // const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    // localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
    // localStorage.removeItem("isLoggedIn", "0");
  //   setIsLoggedIn(false);
  // };

  const ctx = useContext(AuthContext);
  return (
    //</AuthContext.Provider> is a component wherese AuthContext is a object create by ReactDom.createContext to store the component
    // <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}>
    <React.Fragment>  
    <MainHeader onLogout={ctx.logoutHandler} />
      <main>
        {!ctx.isLoggedIn && <Login  />}
        {ctx.isLoggedIn && <Home />}
      </main>
      </React.Fragment>
    // </AuthContext.Provider>
  );
}

export default App;
