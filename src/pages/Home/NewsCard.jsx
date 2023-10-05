import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, image_url, details ,_id} = news;
    return (
        <div className="card bg-base-100 mb-6 md:mb-10 lg:mb-16 border-b-2">

            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <img className="" src={image_url} />

                {
                    details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-red-600 font-bold">Read More..</Link></p> : <p>{details}</p>
                }


            </div>
        </div>
    );
};

export default NewsCard;