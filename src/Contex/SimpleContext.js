import React , {createContext} from 'react';

const SimpleContext = createContext({
    state: {},
    handleDeletePerson: () => {} ,
    handleOnChanged: () => {} ,
    handleAddPerson: () => {} ,
    handlNameChange: () => {} ,
    handleShowPerson: () => {} ,
});

export default SimpleContext;