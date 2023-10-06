
import { useState } from "react";
import validation from "../Validation/Validation";
import styles from './Form.module.css'
import ojo from '../../assets/ojo.png';
import invisible from '../../assets/invisible.png';

const Form = ({ login }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({

        email: '',
        password: ''

    })
    const [mostrarMensaje, setMostrarMensaje] = useState(false);


    const handledSubmit = (event) => {

        event.preventDefault();

        login(userData);
    }

    const handleChange = (event) => {
        // utilizamos bracket notation porque es una propiedad de un objeto que es variable


        setUserData({
            ...userData,
            [event.target.name]: event.target.value

        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))

    }
    const toggleMensaje = () => {

        setMostrarMensaje(!mostrarMensaje);
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (

        <form onSubmit={handledSubmit}>

            <span className={styles.helpUser} onClick={toggleMensaje}>?</span>
            <label htmlFor="email" className={styles.email}>Email</label>
            <input type="email" className={styles.inputEmail} name="email" value={userData.email} onChange={handleChange} />
            <label htmlFor="password" className={styles.password}>Password</label>
            <input type={showPassword ? 'text' : "password"} className={styles.inputPassword} name="password" value={userData.password} onChange={handleChange} />
            <span onClick={togglePasswordVisibility}>
                {showPassword ? <img src={ojo} alt="ojo-abierto" /> : <img src={invisible} alt="ojo-cerrado" />}
            </span>
            <div className={styles.divs}>
                {errors.email && <p style={{ color: "white", fontWeight: 'bolder', width: '250px' }}>{errors.email}</p>}
                {errors.password && <p style={{ color: "white", fontWeight: 'bolder', width: '250px' }}>{errors.password}</p>}
                {mostrarMensaje && <p style={{ color: "white", fontWeight: 'bolder', width: '250px' }}><p>Correo: user@gmail.com</p><p>Contraseña: 123456789</p></p>}
            </div>

            <button className={styles.buttons}>Submit</button>


        </form>


    )

}


export default Form;

