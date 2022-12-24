import React, {useState, useEffect} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';


const Form = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);


    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/pets',{
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
        .then((res) => {
            console.log(res);
            navigate('/')
        })
        .catch((err) => {
            const errorResponse = err.response.data.errors
            const errorArr = [];

            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            
            setErrors(errorArr)
            console.log(err)
        })
    }

    const cancelHandle = () => {
        navigate('/')
    }
    return (
        <div className='col-6 mx-auto'>
            <NavLink className={'div2'} to={'/'}>Back to home</NavLink>
            <h2>Know a pet in need of a home?</h2>
            {errors.map((err, index) => <p style={{color:'red'}} key={index}>This is an error: {err}</p>)}

            <form className='form' onSubmit={onSubmitHandler}>
                <div>
                    <label className="sr-only">Pet Name</label><br/>
                    <input className="form-control mx-sm-3" type={'text'} onChange={(e) => setName(e.target.value)}/><br/>
                    <label className="sr-only">Pet Type</label><br/>
                    <input className="form-control mx-sm-3" type={'text'} onChange={(e) => setType(e.target.value)}/><br/>
                    <label className="sr-only">Pet Description</label><br/>
                    <input className="form-control mx-sm-3" type={'text'} onChange={(e) => setDescription(e.target.value)}/><br/>
                    <input className="btn btn-success" type={'submit'} value={'Add Pet'}/>
                </div>
                <div>
                    <h3>Skills (optional)</h3>
                    <label className="sr-only">Skill 1:</label><br/>
                    <input className="form-control mx-sm-3" type={'text'} onChange={(e) => setSkill1(e.target.value)}/><br/>
                    <label className="sr-only">Skill 2:</label><br/>
                    <input className="form-control mx-sm-3" type={'text'} onChange={(e) => setSkill2(e.target.value)}/><br/>
                    <label className="sr-only">Skill 3:</label><br/>
                    <input className="form-control mx-sm-3" type={'text'} onChange={(e) => setSkill3(e.target.value)}/><br/>
                    <button className="btn btn-dark" onClick={(e) => cancelHandle()}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Form