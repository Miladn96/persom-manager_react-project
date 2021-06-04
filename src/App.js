//========================================================================================
/*                                                                                      *
 *                           AppJS form person manager project 🔥                       *
 *                                                                                      */
//========================================================================================



import React, { Component } from "react";
import Persons from "./Component/Persons/Persons";
import { Alert, Badge, Button, ButtonGroup, Form } from "react-bootstrap";
import { ToastContainer , toast } from 'react-toastify';

class App extends Component {

//========================================================================================
/*                                                                                      *
 * define state objects                                                                 *
 *                                                                                      */
//========================================================================================
  state = {
    className: {
      personLength: "",
    },
    persons: [],
    person: "",
    showPersons: true,
  };

//========================================================================================
/*                                                                                      *
 * Handel Show Person for create                                                        *
 * ShowPerson button in project ➕                                                      *
 *                                                                                      */
//========================================================================================

  handleShowPerson = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

//========================================================================================
/*                                                                                      *
 * Handle Delete Person for create                                                      *
 * trash button next to the Persons added 🪣                                            *
 *                                                                                      */
//========================================================================================

  handleDeletePerson = (id) => {
    //filter
    const duplicatPersons = [...this.state.persons];
    const fillteredPersons = duplicatPersons.filter((p) => p.id !== id);
    this.setState({ persons: fillteredPersons });
    toast.error("شخص حذف شد !", {
      closeOnClick:true ,
      closeButton: true , 
      position: 'top-right',
      draggableDirection: 'y',
    });
  };

//========================================================================================
/*                                                                                      *
 * Handle Name Change for text input bottom                                             *
 * of the persons name for changing their name.                                         *
 *                                                                                      */
//========================================================================================

  handlNameChange = (Event, id) => {
    const { persons } = this.state;

    const personsIndex = persons.findIndex((p) => p.id === id);
    const person = persons[personsIndex];
    person.fullName = Event.target.value;
    const dupPersons = [...persons];
    dupPersons[personsIndex] = person;
    this.setState({ persons: dupPersons });
  };

//========================================================================================
/*                                                                                      *
 * Handle Add Person for text input                                                     *
 * that adding persons information.                                                     *
 *                                                                                      */
//========================================================================================

  handleAddPerson = () => {
    const persons = [...this.state.persons];
    const person = {
      id: Math.floor(Math.random() * 1000),
      fullName: this.state.person,
    };
    if (person.fullName !== "" && person.fullName !== " ") {
      persons.push(person);
      this.setState({ persons, person: "" });
    }
    toast.success(`${person.fullName} به لیست اضافه شد.`, {
      closeOnClick:true ,
      closeButton: true , 
      position: 'bottom-right',
      draggableDirection: 'y',
    });
  };

  handleOnChanged = (Event) => {
    this.setState({ person: Event.target.value });
  };
  render() {
    const { persons, showPersons, className } = this.state;
    var prsns = null;
    if (showPersons) {
      prsns = (
        <Persons
          persons={persons}
          id={persons.id}
          deletePerson={this.handleDeletePerson}
          personChange={this.handlNameChange}
        />
      );
    }

    if (persons.length <= 2) {
      className.personLength = "danger";
    } else if (persons.length <= 5) {
      className.personLength = "warning";
    } else {
      className.personLength = "info";
    }

    return (
      <div className="rtl text-center">
        <Alert variant="info">
          <h2>مدیریت کننده ی اشخاص</h2>
        </Alert>

        <Alert variant="light">
          <h4>
            تعداد اشخاص
            <Badge
              id="personLength"
              className="m-2"
              variant={`${className.personLength}`}
              pill
            >
              {persons.length}
            </Badge>
            نفر هست
          </h4>
        </Alert>

        <div>
          <Form className="m-4" onSubmit={(Event) => Event.preventDefault()}>
            <ButtonGroup dir="ltr">
              <Form.Control
                placeholder={"اضافه کردن شخص جدید"}
                onChange={this.handleOnChanged}
                value={this.state.person}
                className={"p-3 px-5"}
                dir="rtl"
              />
              <Button
                type="submit"
                variant="success"
                onClick={this.handleAddPerson}
                className={"fa fa-plus-square"}
              />
            </ButtonGroup>
          </Form>
        </div>
        <Button
          variant={showPersons ? "success" : "danger"}
          size="lg"
          onClick={this.handleShowPerson}
        >
          نمایش اشخاص
        </Button>
        {prsns}
        <ToastContainer rtl />
        
      </div>
    );
  }
}

export default App;
