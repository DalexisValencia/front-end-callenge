import { Link } from "react-router-dom";
import './searchCard.scss';

const SearchCard = () => {
    return (
        <Link className="result-card" to="/">
            <div className="result-card__image">
                <img src="https://http2.mlstatic.com/D_NQ_NP_689011-MCO45520838216_042021-V.webp" alt="" />
            </div>

            <div className="result-card__content-columns">
                <div className="result-card__content-wrapper">
                    <h2 className="result-card__price">
                        <span className="result-card__price-symbol">$</span>
                        <span className="result-card__price-fraction">1280</span>
                        <img src="" alt="" className="result-card__shiping-free"/>
                    </h2>
                    <p className="result-card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, voluptatibus alias doloribus tenetur explicabo reprehenderit,</p>
                </div>
                <div className="result-card__content-location">
                    <h3 className='result-card__location-name'>location</h3>
                </div>
            </div>
        </Link>
    );
}

export default SearchCard;