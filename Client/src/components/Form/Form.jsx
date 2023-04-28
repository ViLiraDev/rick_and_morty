import { useState } from "react";
import validation from "./validations";
import styles from './form.module.css'

const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''

    })

    const [errors,setErrors] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="email" name="email" value={userData.email} onChange={handleInputChange} />
                {errors.email && <p className={styles.error}>{errors.email}</p>}

                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={userData.password} onChange={handleInputChange}/>
                {errors.password && <p className={styles.error}>{errors.password}</p>}
                <button>LOGIN</button>
            </form>
        </div>
    )
}

export default Form;