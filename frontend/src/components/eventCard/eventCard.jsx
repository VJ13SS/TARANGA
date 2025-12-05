import './eventCard.css'

export default function EventCard({title,imgPath}){
  return (
        <div className={`eventCard `}>
            <div className={`image`}>
                <img src={imgPath} alt="" />
            </div>
            <div className="details">
                <span><i>{title}</i></span>
            </div>
        </div>
    )
}