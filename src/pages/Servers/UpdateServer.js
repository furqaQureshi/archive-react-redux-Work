import React, { useState, useEffect } from "react";

import { Card, CardBody, Col, Row, Button } from "reactstrap";
import { withRouter, useLocation, Redirect } from "react-router-dom";
import { updateServer, getServerOne } from "../../store/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UpdateServer = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [endpoint, setEndpoint] = useState("");
  const { search } = useLocation();
  const [id, setId] = useState(new URLSearchParams(search).get("id"));
  const [disabled, setDisabled] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleValidSubmit = (event) => {
    const data = {
      name,
      address,
      endpoint,
      _id: id,
    };
    props.updateServer(data);
    setDisabled(true);
  };

  useEffect(() => {
    props.getServerOne(id);
  }, []);

  useEffect(() => {
    if (props.serverDetails.length > 0) {
      setName(props.serverDetails[0].name);
      setAddress(props.serverDetails[0].address);
      setEndpoint(props.serverDetails[0].endpoint);
    }
  }, [props.serverDetails]);

  useEffect(() => {
    if (props.addServerSuccess) {
      setSuccess(true);
    } else {
      setDisabled(false);
    }
  }, [props.addServerSuccess]);

  if (success) {
    return <Redirect to="/servers" />;
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Servers" breadcrumbItem="Update Server" />

        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row className="mb-3">
                  <Col sm={6}>
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Name
                    </label>
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="ARI..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </Col>
                  <Col sm={6}>
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Address
                    </label>
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="192.168..."
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Endpoint
                    </label>
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Endpoint name..."
                        value={endpoint}
                        onChange={(e) => setEndpoint(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="mb-4 mt-4">
                  <Col style={{ textAlign: "right" }}>
                    <Button
                      color="primary"
                      onClick={handleValidSubmit}
                      disabled={disabled}
                    >
                      Update Server
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  const { addServerSuccess, serverDetails } = state.Server;
  return { addServerSuccess, serverDetails };
};

export default withRouter(
  connect(mapStateToProps, { updateServer, getServerOne })(UpdateServer)
);

UpdateServer.propTypes = {
  updateServer: PropTypes.func,
  getServerOne: PropTypes.func,
};
