import Header from "../Components/Header";

function Layout({ children, hasHeader = true }) {
  return (
    <>
      {hasHeader && <Header />}
      {children}
    </>
  );
}

export default Layout;
