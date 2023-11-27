/**
 * Registration Form Data
 * 
 * This array represents the configuration for the fields in a registration form.
 */

export const registrationForm = [
    {
        type: "text",
        name:"username",
        placeholder: "username",
        autoCorrect: "off",
        spellCheck: false
    },
    {
        type: "email",
        name:"email",
        placeholder: "email",
        autoCorrect: "off",
        spellCheck: false
    },
    {
        type: "password",
        name:"password",
        placeholder: "password",
        autoCorrect: "off",
        spellCheck: false
    },
    {
        type: "password",
        name:"passwordConfirm",
        placeholder: "confirm password",
        autoCorrect: "off",
        spellCheck: false
    }
]

/**
 * Registration Form CSS Class
 * 
 * This string represents the CSS class that can be applied to the registration form
 * <input> field for styling purposes. 
 */
export const registrationCSSClass = "bg-gray-300 rounded-md p-2";