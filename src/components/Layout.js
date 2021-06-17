import Nav from "./Nav";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <div>
      <Meta />
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
