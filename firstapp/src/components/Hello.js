import React from 'react';

const Hello=()=>{
    // return (
    //     <div>
    //         <h1>Hello from Team</h1>
    //     </div>
    // )
    return React.createElement('div',{id:'Helloid',className:'Helloclass'},React.createElement('h1',null,'Hello From Team'));
}
export default Hello;