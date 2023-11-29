/**
 * Registration Form Data
 * 
 * This array represents the configuration for the fields in a registration form.
 * Registration Object:
 * - type: Specifies the type of the input field (e.g., "text", "password").
 * - name: The name attribute for the input field, used when submitting forms.
 * - placeholder: The placeholder text displayed in the input field.
 * - autocomplete: Specifies whether the browser should automatically correct the input.
 * - id: The unique identifier (id) for the input field tag. Used with 'htmlFor' attribute for a label tag. 
 * - spellCheck: Specifies whether the browser should spell-check the input.
 */

export const registrationForm = [
    {
        type: "text",
        name:"username",
        placeholder: "username",
        autocomplete: "username",
        id:"username",
        spellCheck: false
    },
    {
        type: "email",
        name:"email",
        placeholder: "email",
        autocomplete: "email",
        id:"email",
        spellCheck: false
    },
    {
        type: "password",
        name:"password",
        placeholder: "new-password",
        autocomplete: "off",
        id:"password",
        spellCheck: false
    },
    {
        type: "password",
        name:"passwordConfirm",
        placeholder: "new-password",
        autocomplete: "off",
        id:"password-confirm",
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