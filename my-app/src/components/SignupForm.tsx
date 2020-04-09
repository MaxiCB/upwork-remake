import React from "react";
import firebase from "firebase/app"

const SignupForm = () => {
    const [email, setEmail] = React.useState<string>("")
    const [password, setPassword] = React.useState<string>("")

    const usernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const signup = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <input placeholder="Username" onChange={e => usernameChange(e)}/>
            <input placeholder="Password" onChange={e => passwordChange(e)}/>
            <button onClick={e => signup()}>Sign Up</button>
        </div>
    )
}

export default SignupForm;