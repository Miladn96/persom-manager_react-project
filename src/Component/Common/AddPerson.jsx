import React, { useContext } from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import SimpleContext from "../../Contex/SimpleContext";

const AddPerson = () => {
  const context = useContext(SimpleContext);
  return (
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
  );
};

export default AddPerson;
