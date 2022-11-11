import React from "react";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUser, deleteUser, updateUser } from "../../store/actions";
import { useState } from "react";
import { useEffect } from "react";
import { MDBDataTable } from "mdbreact";

const User = (props) => {
  const [authUser, setAuthUser] = useState({})
  const [userData, setUsersData] = useState({
    columns: [
      {
        label: "#",
        field: "_id",
        sort: "asc",
        width: 220,
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 250,
      },
      {
        label: "Email",
        field: "email",
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
    props.getUser();
    return () => {};
  }, []);

  useEffect(() => {
    if (props.deletedUserSuccess === true || props.addUserSuccess === true) {
      props.getUser();
    }
  }, [props.deletedUserSuccess, props.addUserSuccess]);


  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem("authUser"));
    setAuthUser(obj)
    console.log(obj.id);
  }, []);

  const load = () => {
    const dataArr = props.users.map((item, index) => {
      return {
        _id: index + 1,
        name: item.name,
        email: item.email,
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
              to={{
                pathname: `/update-user`,
                state: {
                  name: item.name,
                  email: item.email,
                  _id: item._id,
                },
              }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <i className="bx bx-edit"></i>
            </Link>
            {item._id !== authUser.id && <i
              className="bx bx-trash"
              style={{ color: "red", display: "flex" }}
              onClick={() => props.deleteUser(item._id)}
            ></i>}
            <i
              onClick={() =>
                props.updateUser({
                  _id: item._id,
                })
              }
            ></i>
          </div>
        ),
      };
    });
    setUsersData({ ...userData, rows: dataArr });
  };
  useEffect(() => {
    load();
  }, [props.users]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">User</h4>
            </div>
          </div>
          <Col>
            <Card>
              <CardBody>
                <Row className="mb-4">
                  <Col>User List</Col>
                  <Col style={{ textAlign: "right" }}>
                    <Link to="/addUser">
                      <Button color="primary">Add User</Button>
                    </Link>
                  </Col>
                  <MDBDataTable
                    responsive
                    bordered
                    data={userData}
                    noBottomColumns={true}
                    striped={true}
                    hover
                  />
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
  const { users, deletedUserSuccess, addUserSuccess } = state.Users;
  return { users, deletedUserSuccess, addUserSuccess };
};
export default withRouter(
  connect(mapStateToProps, { getUser, deleteUser, updateUser })(User)
);
User.propsTypes = {
  getUser: PropTypes.func,
  users: PropTypes.func,
  deleteUser: PropTypes.func,
  updateUser: PropTypes.func,
};

// clean Up function memori ko leake hu nhi deta
