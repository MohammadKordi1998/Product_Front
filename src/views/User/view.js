/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import {
  CRow,
  CCol,
  CCard,
  CAlert,
  CBadge,
  CButton,
  CCardBody,
  CCollapse,
  CDataTable,
  CCardFooter,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import i18n from "src/i18n";
import useData from "./data";
import Moment from "react-moment";
import moment from "jalali-moment";
import CIcon from "@coreui/icons-react";
import React, { Fragment, useState } from "react";

const ViewUser = (props) => {
  // start MomentJS
  moment.locale("fa");
  // End MomentJS
  const [data, setData] = useData();
  const [details, setDetails] = useState([]);
  // Start State Delete
  const [isDeleted, setIsDeleted] = useState();
  const [modalDelete, setModalDelete] = useState();
  const [visibleDelete, setVisibleDelete] = useState(0);
  // End State Delete
  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [details, index];
    }
    setDetails(newDetails);
  };

  const fields = [
    { key: "username", _style: { width: "17%" }, label: i18n.t("UserName") },
    {
      key: "first_name",
      _style: { width: "17%" },
      label: i18n.t("first_name"),
    },
    { key: "last_name", _style: { width: "17%" }, label: i18n.t("last_name") },
    { key: "mobile", _style: { width: "17%" }, label: i18n.t("mobile") },
    { key: "email", _style: { width: "17%" }, label: i18n.t("email") },
    { key: "role", _style: { width: "17%" }, label: i18n.t("role") },
    {
      key: "show_details",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const deleteUser = (id) => {
    // const requestOptions = {
    //   method: "DELETE",
    //   headers: { "Content-Type": "application/json" },
    // };
    // fetch("users/" + id, requestOptions).then((res) => {
    //   if (res.status >= 200 && res.status < 300) {
    //     const deleted = [...data];
    //     const findIndex = deleted.findIndex((e) => e.id == id);
    //     deleted.splice(findIndex, 1);

    //     setData(deleted);
    //     setIsDeleted(true);
    //     setVisibleDelete(2);
    //   } else {
    //     setIsDeleted(false);
    //     setVisibleDelete(2);
    //   }
    // });
    const deleted = [...data];
    const findIndex = deleted.findIndex((e) => e.id == id);
    deleted.splice(findIndex, 1);

    setData(deleted);
    setIsDeleted(true);
    setVisibleDelete(2);
  };

  return (
    <Fragment>
      {isDeleted == true && (
        <Fragment>
          {/* Start Alert Delete */}
          <CAlert
            CAlert
            color="success"
            show={visibleDelete}
            closeButton
            onShowChange={setVisibleDelete}
          >
            <CIcon name="cil-check" size="sm" /> حذف شد
          </CAlert>
          {/* End Alert Delete */}
        </Fragment>
      )}

      {isDeleted == false && (
        <Fragment>
          {/* Start Alert Delete */}
          <CAlert
            CAlert
            color="danger"
            show={visibleDelete}
            closeButton
            onShowChange={setVisibleDelete}
          >
            <CIcon name="cil-warning" size="sm" /> حذف نشد
          </CAlert>
          {/* End Alert Delete */}
        </Fragment>
      )}
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardBody>
              <CDataTable
                items={data}
                fields={fields}
                columnFilter
                tableFilter
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                sorter
                pagination
                scopedSlots={{
                  // status: (item) => (
                  //   <td>
                  //     <CBadge color={getBadge(item.status)}>
                  //       {item.status}
                  //     </CBadge>
                  //   </td>
                  // ),
                  show_details: (item, index) => {
                    return (
                      <td className="py-2">
                        <CButton
                          variant="ghost"
                          shape="pill"
                          size="sm"
                          onClick={() => {
                            toggleDetails(index);
                          }}
                        >
                          {details.includes(index)
                            ? i18n.t("Hide")
                            : i18n.t("Show")}
                        </CButton>
                      </td>
                    );
                  },
                  details: (item, index) => {
                    return (
                      <CCollapse show={details.includes(index)}>
                        <CCardBody>
                          <h4>{item.username}</h4>
                          <p className="text-muted">
                            {i18n.t("Date of registration")} :{" "}
                            {i18n.t("lang") == "FA" && (
                              <Fragment>
                                <Moment locale="FA" format="YYYY/MM/DD">
                                  {moment
                                    .from(item.registered, "en", "YYYY/MM/DD")
                                    .format()}
                                </Moment>
                              </Fragment>
                            )}
                            {i18n.t("lang") == "EN" && (
                              <Fragment>
                                <Moment locale="FA" format="YYYY/MM/DD">
                                  {item.registered}
                                </Moment>
                              </Fragment>
                            )}
                          </p>
                          <CButton size="sm" color="info">
                            <CIcon name="cil-pen" size="sm" />
                          </CButton>{" "}
                          <CButton
                            size="sm"
                            color="danger"
                            className="ml-1"
                            onClick={() => setModalDelete(!modalDelete)}
                          >
                            <CIcon name="cil-trash" size="sm" />
                          </CButton>{" "}
                        </CCardBody>
                        {/* Start Modal Delete */}
                        <CModal
                          show={modalDelete}
                          onClose={setModalDelete}
                          color="danger"
                        >
                          <CModalHeader closeButton>
                            <CModalTitle>{i18n.t("Delete")}</CModalTitle>
                          </CModalHeader>
                          <CModalBody>
                            {i18n.t("textDelete", { value: item.username })}
                          </CModalBody>
                          <CModalFooter>
                            <CButton
                              color="dark"
                              shape="pill"
                              variant="ghost"
                              onClick={() => setModalDelete(false)}
                            >
                              {i18n.t("NO")}
                            </CButton>{" "}
                            <CButton
                              shape="pill"
                              color="danger"
                              variant="ghost"
                              onClick={() => deleteUser(item.id)}
                            >
                              {i18n.t("Yes")}{" "}
                              <CIcon name="cil-trash" size="sm" />
                            </CButton>
                          </CModalFooter>
                        </CModal>
                        {/* End Modal Delete */}
                      </CCollapse>
                    );
                  },
                }}
              />
            </CCardBody>
            <CCardFooter>
              <CButton block color="info" variant="ghost">
                <CIcon name="cil-user-plus" />
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </Fragment>
  );
};

export default ViewUser;
