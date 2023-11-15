import Header from "./Header";

function Layout({ children, isHeader }) {
  return (
    <>
      {isHeader && <Header />}
      {children}
    </>
  );
}

export default Layout;
