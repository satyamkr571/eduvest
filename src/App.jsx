import React from "react";
import styles from "./App.module.scss";
import Dashboard from "./component/dashboard/Dashboard";

const App = () => {
  return (
    <div className={styles.app_container}>
      <Dashboard />
    </div>
  );
};

export default App;
