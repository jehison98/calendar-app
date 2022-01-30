import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { startChecking } from "../actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <h5>Waiting...</h5>;
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute isAuthenticated={!!uid}>
                {/* Doble negacion transforma de string a bool */}
                <CalendarScreen />
              </PrivateRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute isAuthenticated={!!uid}>
                <LoginScreen />
              </PublicRoute>
            }
          />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};
