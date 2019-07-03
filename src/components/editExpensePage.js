import React from 'react'

export const EditExpensePage = (props) =>  {
    console.log(props)
    return(
    <div>
    Editing the expense with the id of {props.match.params.id}
    </div>
)
}
