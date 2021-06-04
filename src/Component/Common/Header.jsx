import React, { Component } from "react";
import { Alert, Badge } from "react-bootstrap";
import SimpleContex from "../../Contex/SimpleContext";
const Header = () => {
  
  return (
    <SimpleContex.Consumer>
      {(context) => (
        <div>
          <Alert variant="info">
            <h2>{context.state.appTitle}</h2>
          </Alert>

          <Alert variant="light">
            <h4>
              تعداد اشخاص
              <Badge className="m-2" variant={`${context.state.className.personLength}`} pill>
                {context.state.persons.length}
              </Badge>
              نفر هست
            </h4>
          </Alert>
        </div>
      )}
    </SimpleContex.Consumer>
  );
};
export default Header;
