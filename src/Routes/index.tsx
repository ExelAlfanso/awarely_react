import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../Pages/Home";
import { SignIn } from "../Pages/Auth/SignIn";
import { SignUp } from "../Pages/Auth/SignUp";
import { Laporan } from "../Pages/Forms/Laporan";
import Logout from "@/Pages/Auth/Logout";
import RekanMelangkah from "@/Pages/Forms/RekanMelangkah";
import Ultksp from "@/Pages/Forms/Ultksp";
import BelaDiri from "@/Sections/Beladiri";
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/beladiri" element={<BelaDiri />} />
        <Route path="/layanan/ultksp" element={<Ultksp />} />
        <Route path="/layanan/rekanmelangkah" element={<RekanMelangkah />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
