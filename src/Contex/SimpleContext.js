import {createContext} from 'react';

const SimpleContext = createContext({
    handleDeletePerson: () => {} ,
    handleOnChanged: () => {} ,
    handleAddPerson: () => {} ,
    handleNameChange: () => {} ,
    handleShowPerson: () => {} ,
});

export default SimpleContext;