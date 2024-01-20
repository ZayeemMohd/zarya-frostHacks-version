import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/authSlice";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import authService from "../appwrite/auth";
// import Logo from "../assets/zarya.png"

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(login({ userData }));
        else dispatch(logout());
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-white">
      <div className="w-full h-screen">
        <Header />
        <main className="w-100vw h-100vh">
          <Outlet />
        </main>
      </div>
      <div className="w-full block">
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
