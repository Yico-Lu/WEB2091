import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "./context/UserContext";
import { ThemeContext } from "./context/ThemeContext";

import Lab1 from "./page/Lab1";
import Lab2 from "./page/Lab2";
import Lab3 from "./page/Lab3";
import StoryForm from "./page/Lab4";
import StoryList from "./page/lab5";
import EditForm from "./page/Lab6";

function App() {
  const userContext = useContext(UserContext);
  const themeContext = useContext(ThemeContext);

  if (!userContext || !themeContext) return null;

  const { user, setUser } = userContext;
  const { theme, toggleTheme } = themeContext;

  return (
    <div>
      {/* NAVBAR */}
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link to="#" className="text-xl font-semibold">
            WEB2091 App
          </Link>

          {/* MENU */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/listUser" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={
                theme === "dark"
                  ? "bg-black text-white px-2 py-1 rounded text-sm"
                  : "bg-white text-black px-2 py-1 rounded text-sm border"
              }
            >
              {theme === "light" ? "Dark" : "Light"}
            </button>

            {user ? (
              <div className="flex items-center gap-2">
                <img
                  src={user.avatar}
                  className="w-8 h-8 rounded-full"
                />
                <span>{user.name}</span>

                <button
                  onClick={() => setUser(null)}
                  className="bg-red-500 px-2 py-1 rounded text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() =>
                  setUser({
                    name: "xuan dung tran",
                    avatar:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNmIX5KouXU3EM1okPBEAFbjcgUInV3GvuVA&s",
                  })
                }
                className="bg-green-500 px-2 py-1 rounded text-sm"
              >
                Login
              </button>
            )}

            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>

        </div>
      </nav>

      {/* MAIN */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">

        <Routes>
          <Route path="/" element={<StoryList />} />
          <Route path="/edit/:id" element={<EditForm />} />
        </Routes>

        <h1 className="text-4xl font-bold mb-4">
          Chào mừng đến với WEB2091
        </h1>

      </div>

      <Toaster />
    </div>
  );
}

export default App;