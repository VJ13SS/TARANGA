import './eventCard.css'

export default function EventCard({title,imgPath}){
  return (
        <div className={`eventCard `}>
            <div className={`image`}>
                <img src={imgPath} alt="" />
            </div>
            <div className="details">
                <span>{title}</span>
            </div>
        </div>
    )
}