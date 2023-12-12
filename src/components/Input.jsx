import React , {useId} from 'react'

/**
 * Input component for forms.
 *
 * @component
 * @param {Object} props - The input component props.
 * @param {string} [props.label] - The label for the input.
 * @param {string} [props.type="text"] - The type of the input.
 * @param {string} [props.className=""] - Additional CSS class names for the input.
 * @param {React.Ref} ref - The ref object for the input element.
 * @returns {JSX.Element} The rendered Input component.
 */

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return(
        <div className='w-full'>
            {label && <label
                className='inline-block mb-1 text-white'
                htmlFor={id}>
                   <b>{label}</b>
                </label>}
            <input 
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            id={id}
            {...props} />
        </div>
    )
})

export default Input