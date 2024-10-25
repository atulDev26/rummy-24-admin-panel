import { Toaster } from "sonner";
import "./App.css";
import "./index.css";
import Loading from "./Components/GlobalLoading/GlobalLoading";
import { Route, Routes } from "react-router-dom";
import Login from "./view/LoginPage/Login";
import Profile from "./view/ProfilePage/Profile";
import InvalidPage from "./view/InvalidPage/InvalidPage";
import Dashboard from "./view/Dashboard/Dashboard";
import AccessManage from "./view/Access Manage/AccessManage";
import UserDetails from "./view/UserManage/UserDetails";
import UserBankAC from "./view/UserManage/UserBankAC";
import UsersNotes from "./view/UserManage/UsersNotes";
import UserAnalysis from "./view/UserManage/UserAnalysis";
import GroupCreateAndManage from "./view/UserManage/GroupCreateAndManage";
import VipUser from "./view/UserManage/VipUser";
import UniqueIdSearch from "./view/UserManage/UniqueIdSearch";
import AdminList from "./view/Admin/AdminList";

function App() {
  return (
    <>
      <Loading />
      <Toaster
        duration={3000}
        richColors
        position={"top-right"}
        visibleToasts={4}
      />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user-profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-control-center" element={<AdminList/>}/>
        <Route path="/user" element={<UserDetails />} />
        <Route path="/bank-account" element={<UserBankAC />} />
        <Route path="/access-manage" element={<AccessManage />} />
        <Route path="/user-notes" element={<UsersNotes />} />
        <Route path="/user-analysis" element={<UserAnalysis />} />
        <Route path="/group-create" element={<GroupCreateAndManage />} />
        <Route path="/vip-user" element={<VipUser />} />
        <Route path="/unique-id-search" element={<UniqueIdSearch />} />
        <Route path="*" element={<InvalidPage />} />
      </Routes>
    </>
  );
}

export default App;
