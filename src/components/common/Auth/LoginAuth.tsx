import React from "react";
import { InputField } from "../../primitives/InputField";
import { loginForm, loginCSSClass } from "./login";

const LoginAuth = () => {

    const handleChange = () => {}
    
    const handleSubmit = () => {

    }
    return (
        <>
            <div>
                Sign in
            </div>
            <form
                role="form"
                onSubmit={handleSubmit}
                className="flex flex-col items-center">
                    { loginForm.map((attributes, idx) => 
                        <>
                            <label >{attributes.placeholder}</label>
                            <InputField 
                                key={idx} 
                                inputAttributes={attributes} 
                                handleChange={handleChange}
                                inputCSSClass={loginCSSClass}
                                />
                        </>
                    )  
                    }
                <button>Submit</button>
            </form>
        </>
    );
};

export default LoginAuth;
