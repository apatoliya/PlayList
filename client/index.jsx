import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <h1>Spotify's PlayList</h1>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));