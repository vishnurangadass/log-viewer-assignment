import React from "react";
import { BrowserRouter, Route, Routes, Outlet, Link } from "react-router-dom";

import "./App.css";
import Accesslogs from "./components/apache_logs/AccessLogs";
import Errorlogs from "./components/apache_logs/ErrorLogs";
import Attacklogs from "./components/apache_logs/AttackLogs";
import StartupLogs from "./components/mysql_logs/StartupLogs";
import ShutdownLogs from "./components/mysql_logs/ShutdownLogs";
import ErrorLogs from "./components/nginx_logs/ErrorLogs";
import AccessLogs from "./components/nginx_logs/AccessLogs";

function App() {
  return (
    <BrowserRouter>
      <div className="sidebar">
        <Link className="navbar" to="/" />
        <div className="dropdown">
          <button
            className="btn btn-transparent dropdown-toggle dropdownmenu"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Apache
          </button>
          <ul className="dropdown-menu menuitems">
            <Link className="navbar" to="/apache-access-logs">
              Access Logs
            </Link>
            <Link className="navbar" to="/apache-error-logs">
              Error Logs
            </Link>
            <Link className="navbar" to="/apache-attack-logs">
              Attack Logs
            </Link>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-transparent dropdown-toggle dropdownmenu"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            My Sql
          </button>
          <ul className="dropdown-menu menuitems">
            <Link className="navbar" to="/mysql-startup-logs">
              Startup Logs
            </Link>
            <Link className="navbar" to="/mysql-shutdown-logs">
              Shutdown Logs
            </Link>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-transparent dropdown-toggle dropdownmenu"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Nginx
          </button>
          <ul className="dropdown-menu menuitems">
            <Link className="navbar" to="/nginx-access-logs">
              Access Logs
            </Link>
            <Link className="navbar" to="/nginx-error-logs">
              Error Logs
            </Link>
          </ul>
        </div>
      </div>

      <Outlet />
      <div className="content">
        <Routes>
          <Route path="/apache-access-logs" element={<Accesslogs />} />
          <Route path="/apache-error-logs" element={<Errorlogs />} />
          <Route path="/apache-attack-logs" element={<Attacklogs />} />
          <Route path="/mysql-startup-logs" element={<StartupLogs />} />
          <Route path="/mysql-shutdown-logs" element={<ShutdownLogs />} />
          <Route path="/nginx-access-logs" element={<AccessLogs />} />
          <Route path="/nginx-error-logs" element={<ErrorLogs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
