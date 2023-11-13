import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import DisplayPage from "./Pages/DisplayPage";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import MainBody from "./Pages/MainBody";
import UserLog from "./Pages/UserLog";
import Cart from "./Pages/Cart";
import { useStateValue } from "./StateProvider";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  const [{ isUser }] = useStateValue();
  console.log(isUser, "isUser");
  const token = isUser;
  console.log(token, "token");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/DisplayPage/:category/:id"
            element={
              <>
                <Header />
                <DisplayPage />
              </>
            }
          ></Route>
          <Route path="/Sign-In" element={<UserLog />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Banner />
                <MainBody />
              </>
            }
          ></Route>

          <Route
            path="/cart"
            element={
              <>
                <Header />
                <ProtectedRoutes token={token}>
                  <Cart />
                </ProtectedRoutes>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
