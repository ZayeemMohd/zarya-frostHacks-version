import React from "react";
import Container from "../container/Container";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn";

function Header(props) {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Completed Profiles",
      slug: "/completedProfiles",
      active: authStatus,
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
      name: "All Profiles",
      slug: "/all-profiles",
      active: authStatus,
      // something can manuplate
    },
    {
      name: "Add Profile",
      slug: "/add-profile",
      active: authStatus,
      // something can manuplate
    },
  ];

  return (
    <div>
      <header className="py-3 shadow bg-white">
        <Container>
          <nav className="flex justify-end">
            <div className="mr-4 flex-grow">
              <Link to="/">
                <Logo width="40px" />
              </Link>
            </div>
            <ul className="flex ml auto">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="inline-block px-6 py-2 duration-200 hover:bg-lime-400 rounded-full"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </nav>
        </Container>
      </header>
    </div>
  );
}

export default Header;
