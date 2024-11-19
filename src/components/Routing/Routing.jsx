import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../../pages/Layout";
import Home from "../../pages/Home";
import { List } from "react-content-loader";
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary";

const Dashboard = lazy(() => import("../../pages/Dashboard"));
const CoinDetail = lazy(() => import("../../pages/CoinDetail"));

function Routing() {
  return (
    <CustomErrorBoundary>
    <Routes>
      <Route path="/" element={
        <Suspense fallback={<List/>}>
          <MainLayout />
        </Suspense>
      }>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={
            <Suspense fallback={<List/>}>
              <Dashboard />
            </Suspense>
        } />
        <Route path="/coin/:id" element={
            <Suspense fallback={<List/>}>
              <CoinDetail />
            </Suspense>
        } />
      </Route>
    </Routes>
    </CustomErrorBoundary>
  );
}

export default Routing;
