import React , {useEffect, useState} from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const buttonFontSize = Math.max(12, windowWidth / 30); // Adjust the division value as needed

  return (
    <header className="py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full rounded-lg">
      <Container>
        <nav className="flex flex-wrap justify-between items-center">
          <div className="mr-5">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex flex-wrap items-center">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name} className="mb-3">
                    <button
                      onClick={() => navigate(item.slug)}
                      className="px-3 py-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full text-white shadow-lg shadow-indigo-500/50"
                      style={{ fontSize: `${buttonFontSize}px` }}
                    >
                      <b>{item.name}</b>
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li className="mb-3">
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
