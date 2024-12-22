import React from "react";
import "./App.css"; // Import  CSS file for styling
import Login from "./login.jsx";
import HomePage from "./Homepage.jsx";



const AppLayout = () => {
  return (
    <div className="app">
      {/* Render the Header component */}
      
      <Login />
      <div className="content">{/* Additional content can go here */}</div>
    </div>
  );
};

// Export AppLayout as the default component
export default AppLayout;
