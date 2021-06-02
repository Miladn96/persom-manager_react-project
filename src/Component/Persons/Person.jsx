import React, { Component } from 'react'

const Person = ({fullName , deletePerson , changed}) => {
    return (
        <div className={"person"}>
            {`${fullName}`}
            <br />
            <button onClick={deletePerson} className={"btn btn-denger"}>x</button>
            <input className={"inpt inpt-green"} type="text" placeholder={fullName} onChange={changed} />
        </div>
    );
}

export default Person;