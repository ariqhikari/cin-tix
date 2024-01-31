import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";

// layouts
import Default from "layouts/Default";
import Admin from "layouts/Admin";
import ScrollToTop from "components/ScrollToTop";

// middleware
import AuthorizeUser from "middleware/Auth";

// pages
import Home from "pages/Home";
import Login from "pages/Login";
import ListFilm from "pages/ListFilm";
import Schedule from "pages/Schedule";
import Transaction from "pages/Transaction";
import TransactionSuccess from "pages/TransactionSucces";
import History from "pages/History";
import Keluhan from "pages/Keluhan";
import MovieDetails from "pages/MovieDetails";

const App = () => {
  const location = useLocation();

  const transitionPage = () => {
    return !location.pathname.includes("customer") &&
      !location.pathname.includes("admin")
      ? location.pathname
      : "";
  };

  return (
    <>
      <ScrollToTop />
      <PageTransition>
        <Routes location={location}>
          <Route path="/" element={<Default />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/list-film" element={<ListFilm />} />
            <Route path="/jadwal" element={<Schedule />} />
            <Route path="/pembayaran" element={<Transaction />} />
            <Route path="/detail-film" element={<MovieDetails />} />
            <Route
              path="/pembayaran-berhasil"
              element={<TransactionSuccess />}
            />
            <Route path="/histori" element={<History />} />
            <Route path="/keluhan" element={<Keluhan />} />
          </Route>

          {/* Not Found */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransition>
    </>
  );
};

export default App;
