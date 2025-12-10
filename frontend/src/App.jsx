// import React, { useContext } from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import Home from "./pages/Home.jsx";       // ✅ FIXED PATH
// import Login from "./pages/Login.jsx";
// import Register from "./pages/Register.jsx";
// import Caption from "./pages/Caption.jsx";
// import { AuthContext } from "./context/AuthContext";

// export default function App() {
//   const { token } = useContext(AuthContext);

//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protect caption page */}
//         <Route
//           path="/caption"
//           element={token ? <Caption /> : <Login />}
//         />
//       </Routes>
//     </>
//   );
// }
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";   // ✅ ADD FOOTER IMPORT

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Caption from "./pages/Caption.jsx";

import { AuthContext } from "./context/AuthContext";

export default function App() {
  const { token } = useContext(AuthContext);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Route */}
        <Route
          path="/caption"
          element={token ? <Caption /> : <Login />}
        />
      </Routes>

      <Footer />   {/* ✅ FOOTER SHOWS ON EVERY PAGE */}
    </>
  );
}
