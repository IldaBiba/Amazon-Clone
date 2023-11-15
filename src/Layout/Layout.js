import Header from "./Header";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  console.log(location);
  let component;
  component = (
    <>
      <Header />
      {children}
    </>
  );
  return component;
}

export default Layout;
