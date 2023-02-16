import React from "react";
import styles from "./App.module.scss";
import Dashboard from "./component/dashboard/Dashboard";
import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div className={styles.app_container}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </div>
  );
};

export default App;
