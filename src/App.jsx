import { Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "./components/Layout";

import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Blogpage from "./pages/Blogpage";
import Singlepage from "./pages/Singlepage";
import Editpost from "./pages/Editpost";
import Notfoundpage from "./pages/Notfoundpage";
import Loginpage from "./pages/Loginpage";

import { RequireAuth } from "./components/hoc/RequireAuth";
import { AuthProvider } from "./components/hoc/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="login" element={<Loginpage />} />
          <Route
            path="about"
            element={
              <RequireAuth>
                <Aboutpage />
              </RequireAuth>
            }
          />
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="posts/:id" element={<Singlepage />} />
          <Route path="posts/:id/edit" element={<Editpost />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
