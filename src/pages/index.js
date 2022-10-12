import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import UserCards from "../components/UserCards";

const HomePage = () => {
  return (
    <Layout>
      <Navbar />
      {/* Title */}
      <UserCards />
      {/* Footer */}
    </Layout>
  );
};

export default HomePage;
