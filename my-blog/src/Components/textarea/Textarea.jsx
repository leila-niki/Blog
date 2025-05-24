import { useEffect, useRef } from "react";

const Textarea = ({className,...rest}) => {

    const textareaRef = useRef(null);

    useEffect(() => {
        const textarea = textareaRef.current;
        if(textarea){
            textarea.style.height = "auto";
            textarea.style.height = textarea.scrollHeight + "px"
        }

    },[rest.value])

    return(
        <textarea
            {...rest}
            className={`${className} px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            rows={2}
            ref={textareaRef}
        />
    )
}

export default Textarea