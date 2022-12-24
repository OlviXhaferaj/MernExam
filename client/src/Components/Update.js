import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {  NavLink,useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const {id} = useParams();
    const [staticName, setStaticName] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const [errors, setErrors] = useState([]);
    const [pets, setPets] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
        .then((res) => {
            setPets(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/'+ id)
        .then(res => {
            setStaticName(res.data.name)
            setName(res.data.name)
            setType(res.data.type)
            setDescription(res.data.description)
            setSkill1(res.data.skill1)
            setSkill2(res.data.skill2)
            setSkill3(res.data.skill3)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const updatePet = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pets/' +id, {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
            const errorResponse = err.response.data.errors
            const errorArr = [];

            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            
            setErrors(errorArr)
        })
    }
    const cancelHandle = () => {
        navigate('/')
    }
        const foundItem = pets.find((item) => {
            return item._id === id
        })
    return (
        <div>

            {
                foundItem ?
                <div className='col-6 mx-auto'>
                    <NavLink className={'div2'} to={'/'}>Back to home</NavLink>
                    <h2>Edit {staticName}</h2>
                    {errors.map((err, index) => <p style={{color:'red'}} key={index}>This is an error: {err}</p>)}

                <form className='form' onSubmit={updatePet}>
                    <div>
                        
                        <label className="sr-only">Pet Name</label><br/>
                        <input value={name} className="form-control mx-sm-3" type={'text'}  onChange={(e) => setName(e.target.value)} /><br/>
                        <label className="sr-only">Pet Type</label><br/>
                        <input value={type} className="form-control mx-sm-3" type={'text'}  onChange={(e) => setType(e.target.value)}/><br/>
                        <label className="sr-only">Pet Description</label><br/>
                        <input value={description} className="form-control mx-sm-3" type={'text'} onChange={(e) => setDescription(e.target.value)}/><br/>
                        <input className="btn btn-success" type={'submit'} value={'Edit Pet'}/>
                    </div>
                    <div>
                        <h3>Skills (optional)</h3>
                        <label className="sr-only">Skill 1:</label><br/>
                        <input value={skill1} className="form-control mx-sm-3" type={'text'} onChange={(e) => setSkill1(e.target.value)}/><br/>
                        <label className="sr-only">Skill 2:</label><br/>
                        <input value={skill2} className="form-control mx-sm-3" type={'text'} onChange={(e) => setSkill2(e.target.value)}/><br/>
                        <label className="sr-only">Skill 3:</label><br/>
                        <input value={skill3} className="form-control mx-sm-3" type={'text'} onChange={(e) => setSkill3(e.target.value)}/><br/>
                        <button className="btn btn-dark" onClick={(e) => cancelHandle()}>Cancel</button>
                    </div>
                </form>
                </div>
                :
                <div>
                    <p>"We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?</p>
                    <p>If So then please click down below to fill in the form!</p>
                    <NavLink to={'/pets/new'}>New</NavLink>
                </div>
            }
        </div>
    ) 
}

export default Update