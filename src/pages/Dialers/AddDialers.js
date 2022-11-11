import React, {useState, useEffect} from "react";

import {
  Card,
  CardBody,
  Col,
  Row,
  Button,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { addDialer } from "../../store/actions"
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import { Link, withRouter, Redirect } from "react-router-dom"
  
const AddDialers = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [disabled, setDisabled] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleValidSubmit = (event) => {
    const data = {
      name,
      address
    }
		props.addDialer(data)
    setDisabled(true)
	}

  useEffect(() => {
    if (props.addDialerSuccess) {
      setSuccess(true)
    } else {
      setDisabled(false)
    }
  }, [props.addDialerSuccess])

  if (success) {
    return <Redirect to="/dialers" />
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Dialers" breadcrumbItem="Add Dialers" />

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
                        placeholder="Dialer Name..."
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
                  <Col style={{textAlign: 'right'}}>
                    <Button color="primary" onClick={handleValidSubmit} disabled={disabled}>
                      Add Dialer
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

const mapStateToProps = state => {
  const { addDialerSuccess } = state.Dialer
	return { addDialerSuccess }
}

export default withRouter(
	connect(mapStateToProps, { addDialer })(AddDialers)
)

AddDialers.propTypes = {
	addDialer: PropTypes.func,
}