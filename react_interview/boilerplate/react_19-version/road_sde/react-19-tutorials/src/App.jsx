import "./App.css";

//use vs useEffect to fetch
import JokeComponentOld from "./components/useExample/joke/JokeComponentOld";
import JokeComponentNew from "./components/useExample/joke/JokeComponentNew";

//use vs useefect for post
import Posts from "./components/useExample/POST_2/Posts";
import PostsUseEffect from "./components/useExample/POST_2/PostsUseEffect";

//message
import MessageComponent from "./components/useExample/Message";

function App() {
  return (
    <div>
      <h1>React 19 Tutorials</h1>
      <p>Check the branches in this repo for lesson wise code</p>

      {/* use vs useEffect to fetch */}

      {/* <JokeComponentOld /> */}
      {/* <JokeComponentNew /> */}

      {/*  */}
      {/* use vs useefect for post */}
      {/* <Posts /> */}
      {/* <PostsUseEffect /> */}

      {/*  */}
      {/* message */}
      <MessageComponent />
    </div>
  );
}

export default App;

/**
 * use hook ( to fetch data like useEffect )
 * use hook ( to fetch data like useEffect )
 */
