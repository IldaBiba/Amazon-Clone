import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import DisplayPage from "./Pages/DisplayPage";
import Header from "./Layout/Header";
import MainBody from "./Pages/MainBody";
import UserLog from "./Pages/UserLog";
import Cart from "./Pages/Cart";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ isUser }] = useStateValue();
  console.log(isUser, "isUser");
  const token = isUser;

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/DisplayPage/:category/:id"
            element={<DisplayPage />}
          ></Route>
          <Route path="/Sign-In" element={<UserLog />} />
          <Route path="/" element={<MainBody />}></Route>
          <Route path="/cart" element={<Cart token={token} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
