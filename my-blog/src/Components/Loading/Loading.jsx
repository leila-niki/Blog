import images from "../../assets/images";
import "./style.css"

const Loading = () => {
    return(
        <div className="loading">
            <img className="loading__image" src={images?.spinnerLoader}/>
        </div>
    )
}

export default Loading