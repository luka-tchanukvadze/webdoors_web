import React from "react";
import Navigation from "./Navigation/Navigation";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";
import News from "./News/News";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <div>
      <Navigation />
      <Services />
      <Projects />
      <News />
      <Footer />
    </div>
  );
}

export default Layout;
