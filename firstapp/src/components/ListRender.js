import React from 'react';
function ListRender(){
    const names=['abc','def','ghi'];
    const newnames=names.map(name=><h1>{name}</h1>)
    return(
        <div>{newnames}</div>
        //     {
        //       names.map(name=><h1>{name}</h1>)

        //     }
        //     <h1>{names[0]}</h1>
        //     <h1>{names[1]}</h1>
        //     <h1>{names[2]}</h1> 
        // </div>
    )
}
export default ListRender;