import React, {Suspense} from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home"));
const Shadow = React.lazy(() => import("./pages/Shadow"));


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/shadow"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Shadow />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
