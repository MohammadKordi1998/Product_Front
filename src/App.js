/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import {
  CRow,
  CLink,
  CHeader,
  CSelect,
  CToggler,
  CHeaderNav,
  CSubheader,
  CHeaderBrand,
  CHeaderNavItem,
  CHeaderNavLink,
  CBreadcrumbRouter,
} from "@coreui/react";
import "./scss/style.scss";
import Auth from "./views/Auth";
import React, { Fragment } from "react";
import Login from "./views/pages/login/Login";
import { HashRouter, Route, Switch } from "react-router-dom";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const LoginURL = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

const App = () => {
  const [auth, setAuth] = Auth();
  console.log(auth);
  return (
    <Fragment>
      <HashRouter>
        {auth == false && <Login />}
        {auth == true && (
          <Fragment>
            <React.Suspense fallback={loading}>
              <Switch>
                <Route
                  exact
                  path="/login"
                  name="Login Page"
                  render={(props) => <LoginURL {...props} />}
                />
                <Route
                  exact
                  path="/register"
                  name="Register Page"
                  render={(props) => <Register {...props} />}
                />
                <Route
                  exact
                  path="/404"
                  name="Page 404"
                  render={(props) => <Page404 {...props} />}
                />
                <Route
                  exact
                  path="/500"
                  name="Page 500"
                  render={(props) => <Page500 {...props} />}
                />
                <Route
                  path="/"
                  name="Home"
                  render={(props) => <TheLayout {...props} />}
                />
              </Switch>
            </React.Suspense>
          </Fragment>
        )}
      </HashRouter>
    </Fragment>
  );
};

export default App;
