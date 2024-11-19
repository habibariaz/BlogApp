import React, { useState, useContext } from 'react'
import '../Style/style.css'
import blog_logo from '../Images/blog.png'
import { API } from '../Service/Api'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../Context/DataProvider'


const initialValues = {
    name: '',
    username: '',
    password: ''
}
    ;
const loginInitialValues = {
    username: '',
    password: ''
};

const SignUp = ({ isUserAuthenticated }) => {

    const [account, toogleAccount] = useState('SignUp');
    const [signup, setSignup] = useState(initialValues);
    const [error, setError] = useState({});
    const [login, setLogin] = useState(loginInitialValues);
    const { setAccount } = useContext(DataContext);
    const navigate = useNavigate();

    const toogleSignup = () => {
        account === 'SignUp' ? toogleAccount('Login') : toogleAccount('SignUp');
    }

    const handleInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value })
    }

    const onValueChange = (e) => {
        // console.log(e.target.name, e.target.value)
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const signupUser = async () => {

        try {
            let response = await API.userSignup(signup);
            if (response.isSuccess) {
                setSignup(initialValues); // Reset form fields
                toogleAccount("login"); // Navigate to login
                alert("Signup Successful! You can now log in.");
            }
        } catch (error) {
            setError({ msg1: "Something went wrong...!!!" })
        }

    }

    const loginUser = async () => {

        try {
            let response = await API.userLogin(login)
            if (response.isSuccess) {
                alert("Login Successfully")
                // setError('');

                sessionStorage.setItem("accessToken", response.data.accessToken);
sessionStorage.setItem("refreshToken", response.data.refreshToken);
                // sessionStorage.setItem("accessToken", `Bearer ${response.data.accessToken}`);
                // sessionStorage.setItem("refreshToken", `Bearer ${response.data.refreshToken}`);

                setAccount({ username: response.data.username, name: response.data.name })
                isUserAuthenticated(true);

                navigate('/Home')
            }
        } catch (error) {
            setError({ msg2: 'Invalid Details' })
        }

    }

    // }


    return (
        <>
            {
                account === 'SignUp' ?
                    <div className="row" style={{ margin: "0" }}>
                        <div className="col-sm-4 mb-3 mb-sm-0 registration_topmargin">
                            <div className="card cards_border_none">
                            </div>
                        </div>
                        <div className="col-sm-4 registration_topmargin" >
                            <div className="card registration_card_shadow ">
                                <div className="card-body">
                                    <div className="text-center">
                                        <img className='registration_logo' src={blog_logo} alt="SignUp" />
                                    </div>
                                    <div className='registrationInputs_padding'>
                                        <div >
                                            <input type="text" name="name" value={signup.name} className='form-control input-underline' placeholder='Enter Name' onChange={(e) => handleInputChange(e)} />
                                        </div><br />
                                        <div>
                                            <input type="text" name="username" value={signup.username} className='form-control input-underline' placeholder='Enter Username' onChange={(e) => handleInputChange(e)} />
                                        </div><br />
                                        <div>
                                            <input type="password" name="password" value={signup.password} className='form-control input-underline' placeholder='Enter Password' onChange={(e) => handleInputChange(e)} />
                                        </div><br />

                                        <div>
                                            <span style={{ color: "red" }}> {error.msg1} </span>
                                        </div><br />

                                        <div className="text-center">
                                            <button type="button" className="btn btn-danger registrationBtn" onClick={() => signupUser()}>SignUp</button>
                                        </div>
                                        <div className="text-center">
                                            <p style={{ color: "grey", paddingTop: "10px" }}>OR</p>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-secondary registrationBtn" onClick={() => { toogleSignup() }}>Already Account</button>
                                        </div><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 registration_topmargin">
                            <div className="card cards_border_none">
                            </div>
                        </div>
                    </div>
                    :
                    <div className="row" style={{ margin: "0" }}>
                        <div className="col-sm-4 mb-3 mb-sm-0 registration_topmargin">
                            <div className="card cards_border_none">
                            </div>
                        </div>
                        <div className="col-sm-4 registration_topmargin  " >
                            <div className="card registration_card_shadow">
                                <div className="card-body">
                                    <div className="text-center">
                                        <img className='registration_logo' src={blog_logo} alt="SignUp" />
                                    </div>
                                    <div className='registrationInputs_padding'>
                                        <div>
                                            <input type="text" value={login.username} name="username" className='form-control input-underline' placeholder='Enter Username' onChange={(e) => onValueChange(e)} />
                                        </div><br />
                                        <div>
                                            <input type="password" value={login.password} name="password" className='form-control input-underline' placeholder='Enter Password' onChange={(e) => onValueChange(e)} />
                                        </div><br />

                                        <div>
                                            <span style={{ color: "red" }}> {error.msg2} </span>
                                        </div>

                                        <br />
                                        <div className="text-center">
                                            <button type="button" className="btn btn-danger registrationBtn" onClick={() => { loginUser() }}>Login</button>
                                        </div>
                                        <div className="text-center">
                                            <p style={{ color: "grey", paddingTop: "10px" }}>OR</p>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-secondary registrationBtn" onClick={() => { toogleSignup() }}>Create An Account</button>
                                        </div><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 registration_topmargin">
                            <div className="card cards_border_none">
                            </div>
                        </div>
                    </div>
            }

        </>
    )
}

export default SignUp
