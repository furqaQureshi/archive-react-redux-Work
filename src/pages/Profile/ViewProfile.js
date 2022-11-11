import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Card, CardBody, CardTitle, Button, Alert } from "reactstrap";

import { updateProfile } from "../../store/actions";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";

const ViewProfile = (props) => {
  const [formvalues, setFormvalues] = useState({ name: "", email: "" });
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  };
  // useEffect(() => {
  //   console.log(err);
  //   if (Object.keys(err).length === 0 && isSubmit) {
  //   }
  // }, [err]);

  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem("authUser"));
    setFormvalues({ name: obj.username, email: obj.useremail });
  }, []);

  useEffect(() => {
    if (props.userProfileSuccess) {
      setSuccess(true);
    } else {
      setDisabled(false);
    }
  }, [props.userProfileSuccess]);

  const handleSubmit = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/gi;
    if (!formvalues.name) {
      setErr("Username is required");
    }
    if (!regEx.test(formvalues.email)) {
      setErr("Please enter a valid email!");
    }
    if (!formvalues.name === !formvalues.email) {
      props.updateProfile(formvalues);
      setFormvalues({ email: "", name: "" });
      // setIsSubmit(true);
      setFormvalues("Signed in successfully");
    } else {
      setErr("please fill the data");
    }
    if (!formvalues.email) {
      setErr("email is required");
    }
    setTimeout(() => setErr(""), 3000);
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">Profile</h4>
            </div>
          </div>
        </Row>
        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <form action="">
                  <CardTitle className="mb-3">
                    <Row>
                      {err && <Alert color="danger"> {err}</Alert>}
                      <Col sm={6}>
                        <div className="col">
                          <label htmlFor="">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            value={formvalues.name}
                            onChange={handleChange}
                            name="name"
                            placeholder="Enter Your name"
                            autoComplete="name"
                          />
                        </div>
                      </Col>
                      <Col sm={6}>
                        <div className="col">
                          <label htmlFor="">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formvalues.email}
                            onChange={handleChange}
                            placeholder="Enter Your email..."
                            autoComplete="email"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-4 mt-4">
                      <Col style={{ textAlign: "right" }}>
                        <Button
                          color="primary"
                          onClick={handleSubmit}
                          disabled={disabled}
                        >
                          Update Profile
                        </Button>
                      </Col>
                    </Row>
                  </CardTitle>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  const { userData, userProfileSuccess } = state.View;
  return { userData, userProfileSuccess };
};

export default withRouter(
  connect(mapStateToProps, { updateProfile })(ViewProfile)
);

ViewProfile.propTypes = {
  updateProfile: PropTypes.func,
};
