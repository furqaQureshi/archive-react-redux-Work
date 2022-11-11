import React, { useState, useRef, useEffect } from "react";

import {
  Card,
  CardBody,
  Col,
  Row,
  Button,
} from "reactstrap";
import { Link, withRouter, Redirect } from "react-router-dom"
import { addServer, getServerOne } from "../../store/actions"
import { connect } from "react-redux"
import PropTypes from 'prop-types'

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const AddServers = (props) => {

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [endpoint, setEndpoint] = useState("");
  const [disabled, setDisabled] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleValidSubmit = (event) => {
    const data = {
      name,
      address,
      endpoint
    }
		props.addServer(data)
    setDisabled(true)
	}

  useEffect(() => {
    if (props.addServerSuccess) {
      setSuccess(true)
    } else {
      setDisabled(false)
    }
  }, [props.addServerSuccess])
  if (success) {
    return <Redirect to="/server" />
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Servers" breadcrumbItem="Add Servers" />
        <Row>
          <Col>
            <Card>
              <CardBody>
                {/* <CardTitle className="h4">Textual inputs</CardTitle>
                <p className="card-title-desc">
                  Here are examples of <code>.form-control</code> applied to
                    each textual HTML5 <code>&lt;input&gt;</code>{" "}
                  <code>type</code>.
                  </p> */}
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
                        placeholder="Server Name..."
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
                <Row className="mb-4">
                  <Col style={{textAlign: 'right'}}>
                    <Button color="primary" onClick={handleValidSubmit} disabled={disabled}>
                      Add Server
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
  const { addServerSuccess, serverDetails } = state.Server
	return { addServerSuccess, serverDetails  } 
}
export default withRouter(
	connect(mapStateToProps, { addServer, getServerOne })(AddServers)
)
AddServers.propTypes = {
	addServer: PropTypes.func,
  getServerOne: PropTypes.func
}