import React from "react";
import { InputField } from "../../primitives/InputField";
import { loginForm, loginCSSClass } from "./login";

const LoginAuth = () => {

    const handleChange = () => {}
    
    const handleSubmit = () => {

    }
    return (
        <>
            <form
                role="form"
                onSubmit={handleSubmit}>
                    { loginForm.map((attributes, idx) => 
                        <>
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
