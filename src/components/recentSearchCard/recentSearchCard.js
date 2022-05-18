import { Link } from 'react-router-dom';
import c_shipping from '../../assets/misc/ic_shipping.png';
import './recentSearchCard.scss';

const RecentSearchCard = (props) => {
    console.info(props.item)
    return (
        <Link className='recent-search__card' to="/items/MLA835201957">
            <figure className='recent-search__image'>
                <img src={props.item.picture} alt={props.item.title} title={props.item.title}/>
            </figure>
            <div className='recent-search__content'>
                <h4 className='recent-search__price'>
                    <span className='recent-search__price-symbol'>$</span>
                    <span className='recent-search__price-fraction'>
                        {/* 14.00 */}
                         {parseInt(props.item.price.amount).toLocaleString()}
                        {/* {props.item.price.currency} */}
                    </span>
                    {props.item.free_shipping ? <img src={c_shipping} className='recent-search__shiping-free' alt='icon-shiping-free'/>: null}
                </h4>
                <h3 className='recent-search__title'>
                   {props.item.title}
                </h3>
            </div>
        </Link>
    );
}

export default RecentSearchCard;