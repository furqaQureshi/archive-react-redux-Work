import React, { useEffect, useState } from "react";
import { Row, Col, Card, CardBody, CardTitle, Button, Alert } from "reactstrap";
import { passwordChange, changeSuccess } from "../../store/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const ChangePassword = (props) => {
  const [formvalues, setFormvalues] = useState({
    oldpassword: "",
    newpassword: "",
    cpassword: "",
  });
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  };

  useEffect(() => {
    if (props.ChangePasswordSuccess) {
      setSuccess(true);
    }
  }, [props.ChangePasswordSuccess]);

  const handleSubmit = () => {
    setErr("");
    if (!formvalues.oldpassword) {
      setErr("Old Password is Requied");
      return;
    }
    if (!formvalues.newpassword) {
      setErr("Forget Password is required");
      return;
    }
    if (!formvalues.cpassword) {
      setErr("Confirm Password is required");
      return;
    }
    if (formvalues.newpassword !== formvalues.cpassword) {
      setErr("Conform Password Do not match");
    }
    if (
      formvalues.oldpassword ||
      formvalues.newpassword ||
      formvalues.cpassword
    ) {
      props.passwordChange(formvalues);
      setErr("Your Application is Success");
      setSuccess(false)
      //oneten110
      //super@oddtech.com
      //Super Admin
      setFormvalues({ oldpassword: "", newpassword: "", cpassword: "" });
    }
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">Change Password</h4>
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
                          <label htmlFor="">Old Password</label>
                          <input
                            type="password"
                            className="form-control"
                            value={formvalues.oldpassword}
                            onChange={handleChange}
                            name="oldpassword"
                            placeholder="Old Password...."
                          />
                        </div>
                      </Col>
                      <Col sm={6}>
                        <div className="col">
                          <label htmlFor="">New Password</label>
                          <input
                            type="password"
                            className="form-control"
                            value={formvalues.newpassword}
                            onChange={handleChange}
                            name="newpassword"
                            placeholder="New Password..."
                            aria-label="password"
                          />
                        </div>
                      </Col>
                      <Col sm={6}>
                        <div className="col py-4">
                          <label htmlFor="">Confirm Password</label>
                          <input
                            type="password"
                            className="form-control"
                            value={formvalues.cpassword}
                            onChange={handleChange}
                            name="cpassword"
                            placeholder="Confirm Password..."
                            aria-label="password"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col style={{ textAlign: "right" }}>
                        <Button color="primary" onClick={handleSubmit}>
                          Change Profile
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
  const { ChangePasswordData, ChangePasswordSuccess } = state.Change;
  return { ChangePasswordData, ChangePasswordSuccess };
};
export default withRouter(
  connect(mapStateToProps, { changeSuccess, passwordChange })(ChangePassword)
);

ChangePassword.propTypes = {
  passwordChange: PropTypes.func,
  changeSuccess: PropTypes.func,
};
