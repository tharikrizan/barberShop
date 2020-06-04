import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Footer from "./components/footer";
import Header from "./components/header";
import AdminPage from "./pages/adminPage";
import SiteContextProvider from "./context/siteContext";

function App() {
  return (
    <SiteContextProvider>
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/admin" component={AdminPage} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </SiteContextProvider>
  );
}

export default App;
