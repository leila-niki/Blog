const Input = ({className, ...rest }) => {
    return (
        <input
            {...rest}
            className={`${className} px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
    );
}

export default Input;