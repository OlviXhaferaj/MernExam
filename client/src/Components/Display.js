import React, {useState, useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';
const Display = () => {
    const {id} = useParams();

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const [petId, setPetId] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/'+id)
        .then((res) => {

            setName(res.data.name)
            setType(res.data.type)
            setDescription(res.data.description)
            setSkill1(res.data.skill1)
            setSkill2(res.data.skill2)
            setSkill3(res.data.skill3)
            setPetId(res.data._id)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            <NavLink className={'div2'} to={'/'}>Back to home</NavLink>
            <h2>Details about: {name}</h2>
            <div className='div1'>
                    <p><b>Pet Type:</b> {type}</p>
                    <p><b>Description:</b> {description}</p>
                    <div>
                        <p className='p-list'><b>Skills:</b></p>
                        
                        <ul>
                            {
                                skill1 === '' || skill1 === undefined?
                                null:
                                <li>{skill1}</li>
                            }
                            {
                                skill2 === '' || skill2 === undefined?
                                null:
                                <li>{skill2}</li>
                            }
                            {
                                skill3 === '' || skill3 === undefined?
                                null:
                                <li>{skill3}</li>
                            }
                        </ul>
                        
                    </div>
                    <DeleteButton name={name} petsid={petId} />

            </div>
            
        </div>
    )
}

export default Display