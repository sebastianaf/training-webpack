import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Login = React.lazy(() => import("../containers/Login.jsx"));

const loading = <div>Loading...</div>;

const App = () => (
  <BrowserRouter>
    <Suspense fallback={loading}>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
export default App;
