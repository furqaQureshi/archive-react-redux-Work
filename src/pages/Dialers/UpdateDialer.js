import React, { useEffect, useState } from "react";

import { Card, CardBody, Col, Row, Button } from "reactstrap";
import { withRouter, useLocation, Redirect } from "react-router-dom";
import { updateDialer, getDialerOne } from "../../store/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UpdateDialer = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const { search } = useLocation();
  const [id, setId] = useState(new URLSearchParams(search).get("id"));
  const [disabled, setDisabled] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleValidSubmit = (event) => {
    const data = {
      name,
      address,
      _id: id,
    };
    props.updateDialer(data);
    setDisabled(true);
  };

  useEffect(() => {
    props.getDialerOne(id);
  }, []);

  useEffect(() => {
    if (props.dialerDetails.length > 0) {
      setName(props.dialerDetails[0].name);
      setAddress(props.dialerDetails[0].address);
    }
  }, [props.dialerDetails]);

  useEffect(() => {
    if (props.addDialerSuccess) {
      setSuccess(true);
    } else {
      setDisabled(false);
    }
  }, [props.addDialerSuccess]);

  if (success) {
    return <Redirect to="/dialers" />;
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Dialers" breadcrumbItem="Update Dialers" />
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
                <Row className="mb-4">
                  <Col style={{ textAlign: "right" }}>
                    <Button
                      color="primary"
                      onClick={handleValidSubmit}
                      disabled={disabled}
                    >
                      Update Dialer
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
  const { addDialerSuccess, dialerDetails } = state.Dialer;
  return { addDialerSuccess, dialerDetails };
};

export default withRouter(
  connect(mapStateToProps, { updateDialer, getDialerOne })(UpdateDialer)
);

UpdateDialer.propTypes = {
  updateDialer: PropTypes.func,
  getDialerOne: PropTypes.func,
};
