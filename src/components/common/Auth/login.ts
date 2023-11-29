/**
 * Login Form Data
 * 
 * This array represents the configuration for the fields in a login form.
 * Login object:
 * - type: Specifies the type of the input field (e.g., "text", "password").
 * - name: The name attribute for the input field, used when submitting forms.
 * - placeholder: The placeholder text displayed in the input field.
 * - autoCorrect: Specifies whether the browser should automatically correct the input.
 * - id: The unique identifier (id) for the input field tag. Used with 'htmlFor' attribute for a label tag. 
 * - spellCheck: Specifies whether the browser should spell-check the input.
 */
export const loginForm = [
    {
        type: "email",
        name:"email",
        placeholder: "email",
        autocomplete: "off",
        id:"email",
        spellCheck: false
    },
    {
        type: "password",
        name:"password",
        placeholder: "password",
        autocomplete: "off",
        id:"password",
        spellCheck: false
    }
]

/**
 * Login Form CSS Class
 * 
 * This string represents the CSS class that can be applied to the Login form
 * <input> field tag, for styling purposes. 
 */
export const loginCSSClass = "bg-gray-300 rounded-md p-2";