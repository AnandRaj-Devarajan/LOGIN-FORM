import { React, useState } from 'react'
import axios from 'axios'

function LogIn() {
    const [email, setemail] = useState('')
    const [pwd, setpwd] = useState('')
    const [errors, seterrors] = useState({ email: '', pwd: '', status: true })
    const logIn = () => {
        let regExp = !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let regExpPwd = !/^[A-Z]*$/
        if (email.isEmpty()) {
            seterrors({ email: "should not be empty", status: false });

        } else if (regExp.test(email)) {
            seterrors({ email: "email is not valid", status: false });
        }
        else if (pwd.isEmpty()) {
            seterrors({ pwd: "should not be empty", status: false });
        }
        else if (pwd.length < 8) {
            seterrors({ pwd: "password must contain 8 character", status: false });
        }
        else if (regExpPwd.test(pwd)) {
            seterrors({ pwd: "password include atleast 1 number,(uppercase,lowercase),1 special character", status: false });
        }
        else if (errors.email.length > 0 && errors.pwd.length > 0 && errors.status) {
            let detail = 
            localStorage.setItem('email', email);
            localStorage.setItem('pwd', pwd);
            axios.post("http://dummy.restapiexample.com/api/v1/create", detail)
                .then(res => {
                    if (res.data && res.data.success) {
                        window.open('/logout');
                    }
                })
        }
    }
    return (
        <div>
            <h2>Username</h2>
            <input
                type="email"
                placeholder="enter email"
                value={email}
                onChange={e => setemail(e.target.value)} />
            {errors.email.length > 0 ? <span>{errors.email}</span> : ""}
            <h2>Password</h2>
            <input
                type="password"
                placeholder="enter password"
                value={pwd}
                maxLength={20}
                onChange={e => setpwd(e.target.value)} />
            {errors.pwd.length > 0 ? <span>{errors.pwd}</span> : ""}
            <div>
                <button onClick={logIn}>Log In</button>
            </div>
        </div>
    )

}
export default LogIn;


