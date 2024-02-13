import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";

// layouts
import Default from "layouts/Default";
import Admin from "layouts/Admin";
import Customer from "layouts/Customer";
import ScrollToTop from "components/ScrollToTop";

// middleware
import AuthorizeUser from "middleware/Auth";

// pages
import Home from "pages/Home";
import Login from "pages/Login";
import ListFilm from "pages/ListFilm";
import Schedule from "pages/Schedule";
import ChoosingSeats from "pages/ChoosingSeats";
import Transaction from "pages/Transaction";
import TransactionSuccess from "pages/TransactionSucces";

// customer
import CustomerActiveTickets from "pages/Customer/ActiveTickets";
import CustomerHistoryTransactions from "pages/Customer/HistoryTransactions";

// admin
import AdminDashboard from "pages/Admin/Dashboard";
import DetailMovie from "pages/Admin/DetailMovie";

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
      <PageTransition
        preset="fadeLeftFadeRight"
        transitionKey={transitionPage()}
      >
        <Routes location={location}>
          <Route path="/" element={<Default />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/list-film" element={<ListFilm />} />
            <Route path="/jl" adwa element={<Schedule />} />
            <Route path="/pemilihan-kursi" element={<ChoosingSeats />} />
            <Route path="/pembayaran" element={<Transaction />} />
            <Route
              path="/pembayaran-berhasil"
              element={<TransactionSuccess />}
            />
          </Route>

          {/* Customer */}
          <Route
            path="/customer"
            element={
              // <AuthorizeUser>
              <Customer />
              // </AuthorizeUser>
            }
          >
            <Route path="" element={<Navigate to="tiket-aktif" replace />} />
            <Route path="tiket-aktif" element={<CustomerActiveTickets />} />
            <Route
              path="riwayat-transaksi"
              element={<CustomerHistoryTransactions />}
            />
          </Route>

          {/* Admin */}
          <Route
            path="/admin"
            element={
              // <AuthorizeUser>
              <Admin />
              // </AuthorizeUser>
            }
          >
            <Route path="" element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="detail-film" element={<DetailMovie />} />
          </Route>

          {/* Not Found */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransition>
    </>
  );
};

export default App;
