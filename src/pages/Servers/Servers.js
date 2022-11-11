import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { getServers, deleteServer, updateServer } from "../../store/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "../../assets/scss/datatables.scss";

const Servers = (props) => {
  const [servers, setServers] = useState({
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
        width: 125,
      },
      {
        label: "Endpoint",
        field: "endpoint",
        sort: "asc",
        width: 125,
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
    props.getServers();
    return () => {};
  }, []);

  useEffect(() => {
    if (props.deleteServerSuccess === true || props.addServerSuccess === true) {
      props.getServers();
    }
  }, [props.deleteServerSuccess, props.addServerSuccess]);

  const load = () => {
    const dataArr = props.serverData.map((item, index) => {
      return {
        id: index + 1,
        name: item.name,
        address: item.address,
        endpoint: item.endpoint,
        actions: (
          <div
            style={{
              display: "flex",
              margin: "auto",
              justifyContent: "space-around",
              alignItems: "center",
              maxWidth: "60%",
              fontSize: "20px",
            }}
          >
            <Link
              to={{ pathname: "/update-server", search: `?id=${item._id}` }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <i className="bx bx-edit"></i>
            </Link>
            <i
              className="bx bx-trash"
              style={{ color: "red", display: "flex" }}
              onClick={() => props.deleteServer(item._id)}
            ></i>
            <i
              className="bx bx-power-off"
              style={{
                color: item.status === true ? "limegreen" : "red",
                display: "flex",
              }}
              onClick={() =>
                props.updateServer({
                  _id: item._id,
                  status: item.status ? !item.status : true,
                },)
              }
            ></i>
          </div>
        ),
      };
    });
    setServers({ ...servers, rows: dataArr });
  };

  useEffect(() => {
    load();
  }, [props.serverData]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="" breadcrumbItem="Servers" />

        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <div
                  className="mb-3"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <CardTitle className="mb-3">Servers </CardTitle>
                  <Link to="/add-servers">
                    <Button color="primary">Add Server</Button>
                  </Link>
                </div>

                <MDBDataTable
                  responsive
                  bordered
                  data={servers}
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
  const { serverData, deleteServerSuccess, addServerSuccess } = state.Server;
  return { serverData, deleteServerSuccess, addServerSuccess };
};

export default withRouter(
  connect(mapStateToProps, { getServers, deleteServer, updateServer })(Servers)
);

Servers.propTypes = {
  getServers: PropTypes.func,
  serverData: PropTypes.any,
  deleteServer: PropTypes.func,
  updateServer: PropTypes.func,
};
