import React, { useEffect } from "react";
import { Row, Col, Card, CardBody, Button, Table, Alert } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { useState } from "react";
import { addUser } from "../../store/Users/Action";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { popup } from "leaflet";

const AddUser = (props) => {
  const init = { name: "", email: "", password: "", cPassword: "" };
  const [formvalues, setFormvalues] = useState(init);
  const [success, setSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    setFormErrors("");
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/gi;
    if (!formvalues.name) {
      setFormErrors("Name is Required");
      return;
    }
    if (!regEx.test(formvalues.email)) {
      setFormErrors("Please enter a valid email!");
      return;
    }
    if (!formvalues.password) {
      setFormErrors("Password is Required");
      return;
    }
    if (!formvalues.cPassword) {
      setFormErrors("Conform Password is Required");
      return;
    }
    if (formvalues.password == formvalues.cPassword) {
      setFormvalues(props.addUser);
      setSuccess(false);
    } else {
      setFormErrors("Passoword Do Not Match ");
    }
    return;
  };

  useEffect(() => {
    if (props.addUserSuccess) {
      setSuccess(true);
    }
  }, [props.addUserSuccess]);
  if (success) {
    return <Redirect to="/user" />;
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">User</h4>
            </div>
          </div>
          {formErrors && <Alert color="danger">{formErrors}</Alert>}
          <Col>
            <Card>
              <CardBody>
                <Row className="mb-3">
                  <Col sm={6}>
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Name <span>*</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formvalues.name}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col sm={6}>
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Email <span>*</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email.."
                        name="email"
                        value={formvalues.email}
                        onChange={handleChange}
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
                      Password
                    </label>
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password..."
                        name="password"
                        value={formvalues.password}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col sm={6}>
                    <label htmlFor="example-text-input" className="col">
                      Conform Password
                    </label>
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Conform Password.."
                        name="cPassword"
                        value={formvalues.cPassword}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="mb-4 mt-4">
                  <Col style={{ textAlign: "right" }}>
                    <Button color="primary" onClick={handleUserSubmit}>
                      Add User
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

export default withRouter(connect(mapStateToProps, { addUser })(AddUser));

AddUser.propTypes = {
  addUser: PropTypes.func,
};
