import React from "react";

interface InputFieldProps {
    inputAttributes: inputAttributesOptions;
    handleChange: () => void;
}

interface inputAttributesOptions {
    type: string;
    name: string;
    placeholder: string;
}

export const InputField = () => {

    const inputAttributes = {
        type: "text",
        name:"username",
        placeholder: "user nombre"
    }

    return (
        <input
            type={inputAttributes.type}
            name={inputAttributes.name}
            placeholder={inputAttributes.placeholder}>
        
        </input>
    )
};
