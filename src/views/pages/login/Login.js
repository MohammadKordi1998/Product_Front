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
import React from "react";
import i18n from "src/i18n";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import CIcon from "@coreui/icons-react";

const Login = () => {
  const cookies = new Cookies();

  const changeLanguege = (e) => {
    window.location.reload();
    cookies.set("lang", e);
  };

  const APILogin = () => {};

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
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder={i18n.t("Username")}
                        autoComplete="username"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder={i18n.t("Password")}
                        autoComplete="current-password"
                      />
                    </CInputGroup>
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
