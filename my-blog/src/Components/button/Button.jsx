const Button = ({ children, className, ...rest}) => {
    return(
        <button
            {...rest}
            className={`${className} px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
            {children}
        </button>
    )
}

export default Button