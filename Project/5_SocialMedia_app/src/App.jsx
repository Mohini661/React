import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import PostlistContextProvider from "./Store/Contexts";
import { Outlet } from "react-router-dom";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div className="main-container">
      <PostlistContextProvider>
        <Sidebar
        // page={page} setPage={setPage}
        />
        <div className="content">
          <Header />
          {/* {page === "Home" ? <PostList /> : <CreatePost />} */}
          <Outlet />
          <Footer />
        </div>
      </PostlistContextProvider>
    </div>
  );
}

export default App;
