import React from 'react';

const List = (props) => {
    return(
        <ul>
            {
                props.notes.map((note, index)=> 
                <li key = {index}>
                    {note}
                </li>  )
            }
        </ul>
    )
}

export default List;