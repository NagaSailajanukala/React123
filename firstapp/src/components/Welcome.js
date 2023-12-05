import React from 'react'


const Welcome = props =>{
console.log(props);
return (
    <div>
<h3>Welcome {props.name} Designation is {props.desig} </h3>
{props.children}
</div>
)
}
export default Welcome;                                                                                   