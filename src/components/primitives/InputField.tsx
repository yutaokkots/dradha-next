import React, {ChangeEvent} from "react";

interface InputFieldProps {
    inputAttributes: inputAttributesOptions;
    handleChange: (e:ChangeEvent<HTMLInputElement>) => void;
    inputCSSClass: string;
}

interface inputAttributesOptions {
    type: string;
    name: string;
    placeholder: string;
    autocomplete: string;
    id: string;
    spellCheck: boolean | undefined;
    
}

export const InputField = ({inputAttributes, handleChange, inputCSSClass}:InputFieldProps) => {

    return (
        <input
            className={inputCSSClass}
            type={inputAttributes.type}
            name={inputAttributes.name}
            placeholder={inputAttributes.placeholder}
            autoComplete={inputAttributes.autocomplete}
            id={inputAttributes.id}
            spellCheck={inputAttributes.spellCheck}
            onChange={handleChange}
            >
        </input>
    )
};
