import React, { Fragment } from 'react';
import ClassCounter from './ClassCounter';
import FuncionalCounter from './FunctionalCounter';

class App extends React.Component {
    render(){
        return (
            <Fragment>
                <ClassCounter />
                <FuncionalCounter />
            </Fragment>
        )
    }
}

export default App;