/**
 * Login Form Data
 * 
 * This array represents the configuration for the fields in a login form.
 */

export const loginForm = [
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
    }
]

/**
 * Login Form CSS Class
 * 
 * This string represents the CSS class that can be applied to the Login form
 * <input> field for styling purposes. 
 */
export const loginCSSClass = "bg-gray-300 rounded-md p-2";