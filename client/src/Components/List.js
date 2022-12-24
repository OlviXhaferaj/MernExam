import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteButton from './DeleteButton';
import { useNavigate } from 'react-router-dom';
const List = () => {
    const [pets, setPets] = useState([]);
    const navigate = useNavigate();
    const updateHandle = (id) => {
        navigate(`pets/${id}/edit`)
    }
    const detailsHandle = (id) => {
        navigate(`pets/${id}`)
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
        .then((res) => {
            setPets(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    
    
        let sorted = [...pets].sort((a,b) => a.type > b.type ? 1 : -1)

    return (
        <div className='div-list'>
            <h2>These pets are looking for a good home</h2>
            <NavLink className={'div2'} to={'/pets/new'}>Add A pet to the shelter</NavLink>
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col" >Actions avaible</th>
                </tr>
            </thead>
        {
            sorted.map((item, index) => {
                return (
                    <tbody key={index}>
                        <tr>
                                <td >{item.name}</td>
                                <td>{item.type}</td>
                                <td >
                                        <button onClick={()=>detailsHandle(item._id)} className="btn btn-primary">Details</button>
                                        <button onClick={()=>updateHandle(item._id)} className="btn btn-primary">Edit</button>
                                </td>
                        </tr>
                    </tbody>
                )
            })
        }
        </table>
        </div>
    )
}

export default List