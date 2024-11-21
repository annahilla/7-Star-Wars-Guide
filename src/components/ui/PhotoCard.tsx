const PhotoCard = ({imgUrl, text} : {imgUrl: string, text: string}) => {
    return(
        <div className="rounded-lg flex flex-col items-center bg-neutral-800">
            <img className="w-full rounded-t-lg" src={imgUrl} alt={text} />
            <p className="border-t-2 border-red-800 w-full text-center py-5 text-neutral-300 uppercase">{text}</p>
        </div>
    )
}

export default PhotoCard;