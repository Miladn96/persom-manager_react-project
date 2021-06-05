import React, { useContext } from "react";
import { Alert, Badge } from "react-bootstrap";
import SimpleContex from "../../Contex/SimpleContext";
const Header = () => {
  const context = useContext(SimpleContex);
  const { persons, className, appTitle } = context.state;

  if (persons.length <= 2) {
    className.personLength = "danger";
  } else if (persons.length <= 5) {
    className.personLength = "warning";
  } else {
    className.personLength = "info";
  }
  return (
    <div>
      <Alert variant="info">
        <h2>{appTitle}</h2>
      </Alert>

      <Alert variant="light">
        <h4>
          تعداد اشخاص
          <Badge className="m-2" variant={`${className.personLength}`} pill>
            {persons.length}
          </Badge>
          نفر هست
        </h4>
      </Alert>
    </div>
  );
};
export default Header;
