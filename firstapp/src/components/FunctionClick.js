import React from 'react';
 
function FunctionClick(){
     const eventHandler=()=>{
        console.log("clicked the button")
    }
       return( <div>
            <button>click function </button>   
       </div>
    )
}
export default FunctionClick;
