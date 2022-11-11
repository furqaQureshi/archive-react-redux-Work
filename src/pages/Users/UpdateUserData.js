import React, { useEffect, useState } from "react";

import { Card, CardBody, Col, Row, Button } from "reactstrap";
import { withRouter, useLocation, Redirect } from "react-router-dom";
import { updateUser } from "../../store/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const UpdateUserData = (props) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [disabled, setDisabled] = useState(false);

  let { state } = useLocation();
  const handleValidSubmit = (event) => {
    const data = {
       id,
      name,
      email,
    };
    props.updateUser(data);
    setDisabled(true)
  };
  useEffect(() => {
    setName(state.name);
    setEmail(state.email);
    setId(state._id);
  }, [state]);

  useEffect(() => {
    if (props.addUserSuccess) {
      setSuccess(true);
    } else {
      setDisabled(false);
    }
  }, [props.addUserSuccess]);

  if (success) {
    return <Redirect to="/user" />;
  }

  return (
    <React.Fragment>
      <div className="page-content" style={{ marginTop: "120px" }}>
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
                        placeholder="Name..."
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
                      Email
                    </label>
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col style={{ textAlign: "right" }}>
                    <Button color="primary" onClick={handleValidSubmit} disabled={disabled}>
                      Update User
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
  const { addUserSuccess } = state.Users;
  return { addUserSuccess };
};

export default withRouter(
  connect(mapStateToProps, { updateUser })(UpdateUserData)
);

UpdateUserData.propTypes = {
  updateUser: PropTypes.func,
};
