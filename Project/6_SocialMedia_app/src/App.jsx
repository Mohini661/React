import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div className="main-container">
      <Sidebar />
      <div className="content">
        <Header />
        {page === "Home" ? <PostList /> : <CreatePost />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
