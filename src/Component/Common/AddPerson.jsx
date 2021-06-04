import React from "react";
import { Form, Button, ButtonGroup, FormControl } from "react-bootstrap";
import context from "react-bootstrap/esm/AccordionContext";
import SimpleContext from "../../Contex/SimpleContext";

const AddPerson = () => {
  return (
    <SimpleContext.Consumer>
      {context => (
        <div>
          <Form className="m-4" onSubmit={(Event) => Event.preventDefault()}>
            <ButtonGroup dir="ltr">
              <Form.Control
                placeholder={"اضافه کردن شخص جدید"}
                onChange={context.handleOnChanged}
                value={context.state.person}
                className={"p-3 px-5"}
                dir="rtl"
              />
              <Button
                type="submit"
                variant="success"
                onClick={context.handleAddPerson}
                className={"fa fa-plus-square"}
              />
            </ButtonGroup>
          </Form>
          <Button
            variant={context.state.showPersons ? "success" : "danger"}
            size="lg"
            onClick={context.handleShowPerson}
          >
            نمایش اشخاص
          </Button>
        </div>
      )}
    </SimpleContext.Consumer>
  );
};

export default AddPerson;
