import useLocalStorage from "@rehooks/local-storage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { USER_STORAGE } from "./utils";
import Login from "./views/Login";
import Quiz from "./views/Quiz";

function App() {
  // https://www.npmjs.com/package/@rehooks/local-storage
  const [userLogged] = useLocalStorage(USER_STORAGE);

  return (
    <>
      {userLogged ? (
        <>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Quiz />} />
              <Route path="/user" element={<Quiz />} />
              <Route path="/scoreboard" element={<Quiz />} />
            </Routes>
          </BrowserRouter>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
