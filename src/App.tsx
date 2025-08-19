import Layout from "@/Layout";
import Dashboard from "@/pages/dashboard";
import Analytics from "@/pages/dashboard/analytics";
import DashboardLayout from "@/pages/dashboard/DashboardLayout";
import Home from "@/pages/home";
import Jotai from "@/pages/tutorial/jotai";
import { Provider } from "jotai";
import { Route, Routes } from "react-router";
import "./App.css";

function App() {
  return (
    <Provider>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="dashboard"
            element={<DashboardLayout />}
          >
            <Route
              index
              element={<Dashboard />}
            />
            <Route
              path="analytics"
              element={<Analytics />}
            />
          </Route>
          <Route path="tutorial">
            <Route
              path="jotai"
              element={<Jotai />}
            />
          </Route>
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
