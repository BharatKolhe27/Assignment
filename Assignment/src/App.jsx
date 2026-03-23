import "./App.css";
import Dashboard from "./components/Dashboard";
import PostCard from "./components/PostCard";
import Cart from "./pages/Cart";
import { useFetch } from "./hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "./redux/languageSlice";

function App() {
  const { data, loading } = useFetch("https://dummyjson.com/posts");

  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  return (
    <div className="app">
      <h1>{language === "en" ? "Hello" : "Bonjour"}</h1>

      <button className="btn" onClick={() => dispatch(toggleLanguage())}>
        Switch Language
      </button>

      <Dashboard />
       <Cart />

      <h2>Posts</h2>
      {loading && <p>Loading...</p>}

      <div className="posts">
        {data?.posts?.slice(0, 5).map((post) => (
          <PostCard key={post.id} title={post.title} body={post.body} />
        ))}
      </div>

     
    </div>
  );
}

export default App;