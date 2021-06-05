import React, { useContext } from "react";
import { Alert, Badge } from "react-bootstrap";
import SimpleContex from "../../Contex/SimpleContext";
const Header = () => {
  const context = useContext(SimpleContex);
  let personLength = "";
  if (context.Persons.length <= 2) {
    personLength = "danger";
  } else if (context.Persons.length <= 5) {
    personLength = "warning";
  } else {
    personLength = "info";
  }
  return (
    <div>
      <Alert variant="info">
        <h2>{context.AppTitle}</h2>
      </Alert>

      <Alert variant="light">
        <h4>
          تعداد اشخاص
          <Badge className="m-2" variant={`${personLength}`} pill>
            {context.Persons.length}
          </Badge>
          نفر هست
        </h4>
      </Alert>
    </div>
  );
};
export default Header;
