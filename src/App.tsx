import { Container } from "@chakra-ui/react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import useStore from "./store";
import Leaderboard from "./views/Leaderboard";
import Login from "./views/Login";
import Quiz from "./views/Quiz";
import User from "./views/User";

const routes = [
  {
    path: "/",
    element: <Quiz />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
];

function App() {
  const isAppReady = useStore((state) => state.isAppReady);
  const userLogged = useStore((state) => state.userLogged);
  const intializeFields = useStore((state) => state.intializeFields);

  useEffect(() => {
    intializeFields();
  }, []);

  return (
    <>
      {isAppReady && (
        <>
          {userLogged ? (
            <>
              <BrowserRouter>
                <Navbar />
                <Container
                  marginTop={{ base: "90px", md: "140px" }}
                  paddingBottom="30px"
                  maxWidth="container.lg"
                >
                  <Routes>
                    {routes.map((route) => (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                      />
                    ))}
                  </Routes>
                </Container>
              </BrowserRouter>
            </>
          ) : (
            <Login />
          )}
        </>
      )}
    </>
  );
}

export default App;
