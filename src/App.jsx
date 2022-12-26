import React, { useEffect, useState } from 'react'
import './App.css';
import Input from './components/Input';

const App = () => {

    const [user, setUsers] = useState([]);
    const [nombre, setNombre] = useState("John Doe");
    const [username, setUsername] = useState("john.doe@gmail.com");
    const [password, setPassword] = useState("123456");
    const [edad, setEdad] = useState(0);

    useEffect(() => {
        getUsers('https://3001-ljavierrodr-controlledi-avr8rtc8ywp.ws-us80.gitpod.io/users');
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        let data = {
            nombre,
            username,
            password
        }

        let options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch('https://3001-ljavierrodr-controlledi-avr8rtc8ywp.ws-us80.gitpod.io/users', options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.id) {
                    setNombre('');
                    setUsername('');
                    setPassword('');
                }
            });
    }

    const getUsers = (url, options = {}) => {
        fetch(url, options)
            .then(response => response.json())
            .then(data => setUsers(data))
    }

    const handleChangeNombre = (e) => {
        setNombre(e.target.value)
    }

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleChangeEdad = e => {
        setEdad(e.target.value);
    }

    const handleKeyUp = e => {
        console.log(e.key);
        console.log(e.keyCode);

        if (e.keyCode === 8 || e.keyCode >= 47 && e.keyCode <= 58) {
            //setEdad(e.target.value);
            e.target.classList.remove('is-invalid');
        } else {
            e.target.classList.add('is-invalid');
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="text-center text-primary">
                        Inputs Controlados
                    </h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={handleSubmit}>
                        <Input type={"text"} className={"form-control mb-2"} placeholder={"Ingrese nombre"} onChange={handleChangeNombre} value={nombre} />
                        <Input type={"email"} className={"form-control mb-2"} placeholder={"Ingrese usuario"} onChange={handleChangeUsername} value={username} />
                        <Input type={"password"} className={"form-control mb-2"} placeholder={"Ingrese contraseña"} onChange={handleChangePassword} value={password} />
                        {/* <Input type={"text"} className={"form-control mb-2"} placeholder={"Ingrese Edad"} onKeyUp={handleKeyUp} onChange={handleChangeEdad} value={edad} /> */}
                        <div className="d-grid">
                            <button className="btn btn-primary btn-sm gap-2">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default App;
