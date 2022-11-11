import React from "react"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col sm={6}>{new Date().getFullYear()} © Odd Technologies.</Col>
            <Col sm={6}>
              <div className="text-sm-end d-none d-sm-block">
                Version 1.0.0
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
