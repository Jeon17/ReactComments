import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

// The NoMatch component is meant to reveal a 404 error with
// the page rendering a message that states "Page Not Found"
// The function is constructed with the components such as Container, 
// row, column and Jumbotron so it is necessary to import the Grid and Jumbotron from
//  the corresponding files within the app folder structure.


function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
