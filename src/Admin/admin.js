import React from "react";
import "./admin.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Notice from "./pages/Notice/Notice";
import PaymentMethod from "./pages/Payment Methods/PaymentMethod";
import Settings from "./pages/Settings/Settings";
import GameControl from "./pages/Game Control/GameControl";
import ModalContext from "./Contexts/ModalContext";
// import ManageClubs from "./pages/Manage Clubs/ManageClubs";
import AdminProfits from "./pages/Profits/AdminProfits";
import DailyProfits from "./pages/Profits/DailyProfits";
import ClosedGames from "./pages/Closed Game History/ClosedGames";
import ClosedQuestions from "./pages/Closed Game History/ClosedQuestions";
import ClosedAnswers from "./pages/Closed Game History/ClosedAnswers";
import DefaultQuestion from "./pages/MainDefaultQuestionAnswer/DefaultQuestion/DefaultQuestion";
import DefaultQuestionAnswer from "./pages/MainDefaultQuestionAnswer/DefaultQuestionAnswer/DefaultQuestionAnswer";
import BetHistory from "./pages/Bet History/BetHistory";
import BetRefunds from "./pages/Bet History/BetRefunds";
import BetCashout from "./pages/Bet History/BetCashout";
import ClubWithdraws from "./pages/DepositAndWithdraw/Club/ClubWithdraws";
import DepositsHistory from "./pages/DepositAndWithdraw/User/DepositsHistory";
import UserWithdraws from "./pages/DepositAndWithdraw/User/UserWithdraws";
import UserDeposits from "./pages/DepositAndWithdraw/User/UserDeposits";
import WithdrawsHistory from "./pages/DepositAndWithdraw/User/WithdrawsHistory";
import ClubWithDrawsHistory from "./pages/DepositAndWithdraw/Club/ClubWithDrawsHistory";
import UserToSuperIdTransfers from "./pages/Balance Transfers/User To Super Id/UserToSuperIdTransfers";
import TransfersHistory from "./pages/Balance Transfers/User To Super Id/TransfersHistory";
import BalanceTransfer from "./pages/Balance Transfers/User to User/BalanceTransfer";
import BalanceTransferHistory from "./pages/Balance Transfers/User to User/BalanceTransferHistory";
import ManageAdmins from "./pages/Manage/Manage Admins/ManageAdmins";
import LiveUsers from "./pages/Manage/Live Users/LiveUsers";
import ManageUsers from "./pages/Manage/Manage Users/ManageUsers";
import ManageClubs from "./pages/Manage/Manage Clubs/ManageClubs";

export default [
  <Route path="dashboard" Component={Dashboard} />,
  <Route path="notice" Component={Notice} />,
  <Route path="payment-method" Component={PaymentMethod} />,
  <Route path="settings" Component={Settings} />,
  <Route path="bet-control" Component={GameControl} />,
  // <Route path="manage-clubs" Component={ManageClubs} />,
  <Route path="admin-profits" Component={AdminProfits} />,
  <Route path="daily-profits" Component={DailyProfits} />,
  <Route path="closed-game" Component={ClosedGames} />,
  <Route path="closed-question" Component={ClosedQuestions} />,
  <Route path="closed-answer" Component={ClosedAnswers} />,

  <Route path="default/question" Component={DefaultQuestion} />,
  <Route path="default/question-answer" Component={DefaultQuestionAnswer} />,

  <Route path="history/bet-history" Component={BetHistory} />,
  <Route path="history/bet-refunds" Component={BetRefunds} />,
  <Route path="history/bet-cashout" Component={BetCashout} />,

  <Route path="deposits" Component={UserDeposits} />,
  <Route path="deposits/history" Component={DepositsHistory} />,
  <Route path="withdraws" Component={UserWithdraws} />,
  <Route path="withdraws/history" Component={WithdrawsHistory} />,

  <Route path="club-withdraws" Component={ClubWithDrawsHistory} />,
  <Route path="club-withdraws/history" Component={ClubWithDrawsHistory} />,

  <Route
    path="to-reseller-balance-transfers"
    Component={UserToSuperIdTransfers}
  />,
  <Route
    path="to-reseller-balance-transfers/history"
    Component={TransfersHistory}
  />,

  <Route path="user-to-user-balance-transfer" Component={BalanceTransfer} />,
  <Route
    path="user-to-user-balance-transfer/history"
    Component={BalanceTransferHistory}
  />,

  <Route path="manage-admins" Component={ManageAdmins} />,
  <Route path="manage-users" Component={ManageUsers} />,
  <Route path="live-users" Component={LiveUsers} />,
  <Route path="manage-clubs" Component={ManageClubs} />,
];
