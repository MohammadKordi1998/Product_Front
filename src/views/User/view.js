/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import {
  CRow,
  CCol,
  CCard,
  CBadge,
  CButton,
  CCardBody,
  CCollapse,
  CDataTable,
  CCardHeader,
  CCardFooter,
} from "@coreui/react";
import i18n from "src/i18n";
import useData from "./data";
import React, { Fragment, useEffect, useState } from "react";

const ViewUser = (props) => {
  const [data, setData] = useData();
  const [details, setDetails] = useState([]);
  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
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
    const deleted = [...data];
    const findIndex = deleted.findIndex((e) => e.id == id);
    deleted.splice(findIndex, 1);

    setData(deleted);
  };

  return (
    <Fragment>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader></CCardHeader>
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
                          color="primary"
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
                            User since: {item.registered}
                          </p>
                          <CButton size="sm" color="info">
                            User Settings
                          </CButton>
                          <CButton
                            size="sm"
                            color="danger"
                            className="ml-1"
                            onClick={() => deleteUser(item.id)}
                          >
                            Delete
                          </CButton>
                        </CCardBody>
                      </CCollapse>
                    );
                  },
                }}
              />
            </CCardBody>
            <CCardFooter>
              <CButton block color="info" variant="ghost">
                {i18n.t("Create")}
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </Fragment>
  );
};

export default ViewUser;
