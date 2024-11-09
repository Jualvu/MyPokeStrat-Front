import { StrictMode } from "react";
import Home from "./pages/Home.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
import SearchPokemon from "./pages/SearchPokemon.tsx";
import {PostsProvider} from "./context/PostsContext.tsx";


const App = ():JSX.Element => {
    return(
    <StrictMode>
    <PostsProvider>
      <BrowserRouter>
        <Routes>

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
            path="/searchPokemon"
            element={
              <>
                <Header />
                <SearchPokemon />
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