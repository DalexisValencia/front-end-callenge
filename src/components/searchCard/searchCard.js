import { Link } from "react-router-dom";
import './searchCard.scss';
import c_shipping from '../../assets/misc/ic_shipping.png';

const SearchCard = (props) => {
    return (
        <Link className="result-card" to={`/items/${props.item.id}`}>
            <div className="result-card__image">
                <img src={props.item.picture} alt="" />
            </div>

            <div className="result-card__content-columns">
                <div className="result-card__content-wrapper">
                    <h2 className="result-card__price">
                        <span className="result-card__price-symbol">$</span>
                        <span className="result-card__price-fraction">
                            {parseInt(props.item.price.amount).toLocaleString()}
                            .00
                            {/* {props.item.price.currency} */}
                        </span>
                        {props.item.free_shipping ? <img src={c_shipping} alt="" className="result-card__shiping-free"/> : null}
                    </h2>
                    <p className="result-card__description">{props.item.title}</p>
                </div>
                <div className="result-card__content-location">
                    <h3 className='result-card__location-name'>Capital Frederal</h3>
                </div>
            </div>
        </Link>
    );
}

export default SearchCard;