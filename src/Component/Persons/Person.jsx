import React from "react";
import SimpleContext from "../../Contex/SimpleContext";
const Person = ({fullName , changed , deletePerson}) => {
  return (
    <div className={"card text-white bg-info mb-3 mt-3 mx-auto w-25"}>
      <div class="card-body text-center">
        <p className="d-block h1">{`${fullName}`}</p>
        <div className="input-group justify-content-center">
          <input
            className={"form-control w-50"}
            type="text"
            placeholder={fullName}
            onChange={changed}
          />
          <div className="input-group-prepend">
            <button
              onClick={deletePerson}
              className={"btn btn-sm btn-danger fa fa-trash"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
