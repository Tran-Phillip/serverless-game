import React from 'react';

class SampleComponent extends React.Component { 
    /*
    props: 
        None
    */

    sum(a, b){
        return a + b;
    }

    render(){
        return( 
            <div>
            <h1>Phillip is cool</h1>
            <h2> Hahahah </h2>
            </div>
        );
    }
}

export default SampleComponent