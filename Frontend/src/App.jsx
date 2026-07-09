import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import RequestDetails from "./pages/RequestDetails";
import TenantDashboard from "./pages/tenant/Dashboard";
import NewRequest from "./pages/tenant/NewRequest";
import MyRequests from "./pages/tenant/MyRequests";
import StaffDashboard from "./pages/staff/Dashboard";
import RequestList from "./pages/staff/RequestList";
import ImportRequests from "./pages/staff/ImportRequests";
import Reports from "./pages/staff/Reports";
import ExportCenter from "./pages/staff/ExportCenter";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
      <Route element={<ProtectedRoute role="tenant" />}>
        <Route element={<AppLayout />}>
          <Route path="/tenant" element={<TenantDashboard />} />
          <Route path="/tenant/new" element={<NewRequest />} />
          <Route path="/tenant/requests" element={<MyRequests />} />
          <Route path="/tenant/requests/:id" element={<RequestDetails />} />
        </Route>
      </Route>
      <Route element={<ProtectedRoute role="staff" />}>
        <Route element={<AppLayout />}>
          <Route path="/staff" element={<StaffDashboard />} />
          <Route path="/staff/requests" element={<RequestList />} />
          <Route path="/staff/requests/:id" element={<RequestDetails />} />
          <Route path="/staff/import" element={<ImportRequests />} />
          <Route path="/staff/reports" element={<Reports />} />
          <Route path="/staff/export" element={<ExportCenter />} />
        </Route>
      </Route>
    </Routes>
  );
}
