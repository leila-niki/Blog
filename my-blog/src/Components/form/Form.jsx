import Input from "../input/Input";
import Textarea from "../textarea/Textarea";
import Button from "../button/Button";


const Form = ({title,inputPlaceholder, textareaPlaceholder, inputValue, body, inputName, textareaName, handleChange, handleSubmit}) => {
    return(
        <div className="flex flex-col mb-5">
            <h2 className="font-bold text-2xl py-4">{title}</h2>
            <Input className="w-2/5" name={inputName} value={inputValue} onChange={handleChange} placeholder={inputPlaceholder}/>
            <Textarea className="w-2/5 my-3" name={textareaName} value={body} onChange={handleChange} placeholder={textareaPlaceholder}/>
            <Button className="w-[120px]" onClick={handleSubmit}>ارسال پست</Button>
        </div>
    )
}

export default Form