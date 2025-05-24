import images from "../../assets/images";

const Loading = () => {
    return(
        <div className="h-full flex justify-center items-center">
            <img className="w-[100px]" src={images?.spinnerLoader}/>
        </div>
    )
}

export default Loading