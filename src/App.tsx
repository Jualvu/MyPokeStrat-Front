import { StrictMode } from "react";
import Home from "./pages/Home.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
import SignIn from "./pages/SignIn.tsx";
import Users from "./pages/Users.tsx";
import NewPost from "./pages/NewPost.tsx";
import {PostsProvider} from "./context/PostsContext.tsx";


const App = ():JSX.Element => {
    return(
    <StrictMode>
    <PostsProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/newPost"
            element={
              <>
                <Header />
                <NewPost />
              </>
            }
          ></Route>

          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>

          <Route
            path="/login"
            element={
              <>
                <Header />
                <SignIn />
              </>
            }
          ></Route>

          <Route
            path="/users"
            element={
              <>
                <Header />
                <Users />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </PostsProvider>
  </StrictMode>
    )
}

export default App