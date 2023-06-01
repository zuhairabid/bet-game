import React from "react";
import "./admin.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Notice from "./pages/Notice/Notice";
import PaymentMethod from "./pages/Payment Methods/PaymentMethod";
import Settings from "./pages/Settings/Settings";
import GameControl from "./pages/Game Control/GameControl";
import ModalContext from "./Contexts/ModalContext";
import ManageClubs from "./pages/Manage Clubs/ManageClubs";

export default [
  <Route path="dashboard" Component={Dashboard} />,
  <Route path="notice" Component={Notice} />,
  <Route path="payment-method" Component={PaymentMethod} />,
  <Route path="settings" Component={Settings} />,
  <Route path="bet-control" Component={GameControl} />,
  <Route path="manage-clubs" Component={ManageClubs} />,
];
