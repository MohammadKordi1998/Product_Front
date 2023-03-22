/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import {
  CRow,
  CCol,
  CCard,
  CForm,
  CInput,
  CSelect,
  CButton,
  CCardBody,
  CCardGroup,
  CContainer,
  CInputGroup,
  CInputGroupText,
  CInputGroupPrepend,
  CFormGroup,
} from "@coreui/react";
import i18n from "src/i18n";
import Validator from "src/Validator";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import CIcon from "@coreui/icons-react";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  // Start Valid
  const [validUser, setValidUser] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  // End Valid
  // Start set Cookie Lang
  const cookies = new Cookies();
  const changeLanguege = (e) => {
    window.location.reload();
    cookies.set("lang", e);
  };
  // End set Cookie Lang

  // Start Login
  const APILogin = () => {
    if (
      data.username != undefined &&
      data.username != null &&
      data.username != "" &&
      data.password != undefined &&
      data.password != null &&
      data.password != ""
    ) {
      setValidUser(false);
      setValidPassword(false);
    } else {
      if (
        data.username == undefined ||
        data.username == null ||
        data.username == ""
      ) {
        setValidUser(true);
      } else {
        setValidUser(false);
      }

      if (
        data.password == undefined ||
        data.password == null ||
        data.password == ""
      ) {
        setValidPassword(true);
      } else {
        setValidPassword(false);
      }
    }
  };
  // End Login
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="4">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <CFormGroup row>
                      <CCol md="9">
                        <h3>{i18n.t("Login")}</h3>
                      </CCol>
                      <CCol md="3">
                        <CSelect
                          onChange={(e) => changeLanguege(e.target.value)}
                          value={cookies.get("lang")}
                          size="sm"
                        >
                          <option value={"en"}>EN</option>
                          <option value={"fa"}>FA</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <p className="text-muted">
                      {i18n.t("Sign In to your account")}
                    </p>
                    {/* Start UserName */}
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        value={data.username}
                        autoComplete="username"
                        onChange={(e) =>
                          setData({ ...data, username: e.target.value })
                        }
                        placeholder={i18n.t("Username")}
                      />
                    </CInputGroup>
                    <Validator
                      text={i18n.t("Please enter the correct amount")}
                      isValid={validUser}
                    />
                    {/* End UserName */}
                    {/* Start Password */}
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        value={data.password}
                        autoComplete="current-password"
                        placeholder={i18n.t("Password")}
                        onChange={(e) =>
                          setData({ ...data, password: e.target.value })
                        }
                      />
                    </CInputGroup>
                    <Validator
                      text={i18n.t("Please enter the correct amount")}
                      isValid={validPassword}
                    />
                    {/* End Password */}
                    <CRow>
                      <CCol xs="12">
                        <CButton
                          color="info"
                          shape="pill"
                          variant="ghost"
                          className="px-4"
                          block
                          onClick={APILogin}
                        >
                          {i18n.t("Login")}
                        </CButton>
                      </CCol>
                      {/* <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
