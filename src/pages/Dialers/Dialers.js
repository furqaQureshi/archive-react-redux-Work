import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { getDialers, deleteDialer, updateDialer } from "../../store/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "../../assets/scss/datatables.scss";

const Dialers = (props) => {
  const [dialers, setDialers] = useState({
    columns: [
      {
        label: "#",
        field: "id",
        sort: "asc",
        width: 250,
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 250,
      },
      {
        label: "Address",
        field: "address",
        sort: "asc",
        width: 250,
      },
      {
        label: "Actions",
        field: "actions",
        sort: "asc",
        width: 220,
      },
    ],
  });


  useEffect(() => {
    props.getDialers();
    return () => {};
  }, []);

  useEffect(() => {
    if (props.deleteDialerSuccess === true || props.addDialerSuccess === true) {
      props.getDialers();
    }
  }, [props.deleteDialerSuccess, props.addDialerSuccess]);

  const load = () => {
    const dataArr = props.dialerData.map((item, index) => {
      return {
        id: index + 1,
        name: item.name,
        address: item.address,
        actions: (
          <div
            style={{
              display: "flex",
              margin: "auto",
              justifyContent: "space-around",
              maxWidth: "60%",
              fontSize: "20px",
            }}
          >
            {" "}
            <Link
              to={{ pathname: "/update-dialer", search: `?id=${item._id}` }}
              style={{ display: "flex", alignItems: "center" }
              }
            >
              <i className="bx bx-edit"></i>
            </Link>
            <i
              className="bx bx-trash"
              style={{ color: "red", display: "flex" }}
              onClick={() => props.deleteDialer(item._id)}
            ></i>
            <i
              className="bx bx-power-off"
              style={{
                color: item.status === true ? "limegreen" : "red",
                display: "flex",
              }}
              onClick={() =>
                props.updateDialer({
                  _id: item._id,
                  status: item.status ? !item.status : true,
                })
              }
            ></i>
          </div>
        ),
      };
    });
    setDialers({ ...dialers, rows: dataArr });
  };

  useEffect(() => {
    load();
  }, [props.dialerData]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="" breadcrumbItem="Dialers" />

        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <div
                  className="mb-3"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <CardTitle className="mb-3">Dialers </CardTitle>
                  <Link to="/add-dialers">
                    <Button color="primary" type="submit">
                      Add Dialer
                    </Button>
                  </Link>
                </div>
                <MDBDataTable
                  responsive
                  bordered
                  data={dialers}
                  noBottomColumns={true}
                  striped={true}
                  hover
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  const { dialerData, deleteDialerSuccess, addDialerSuccess } = state.Dialer;
  return { dialerData, deleteDialerSuccess, addDialerSuccess };
};

export default withRouter(
  connect(mapStateToProps, { getDialers, deleteDialer, updateDialer })(Dialers)
);

Dialers.propTypes = {
  getDialers: PropTypes.func,
  dialerData: PropTypes.any,
  deleteDialer: PropTypes.func,
  updateDialer: PropTypes.func,
};
