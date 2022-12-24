import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const { name,petsid} = props;
    const deletehandle = (e) => {
        axios.delete('http://localhost:8000/api/pets/'+ petsid)
        .then((res) => {
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
        <div>
            <button className='btn btn-warning' onClick={deletehandle}>Adopt {name}</button>
        </div>
    )
}

export default DeleteButton