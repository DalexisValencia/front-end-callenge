import { Link } from 'react-router-dom';
import c_shipping from '../../assets/misc/ic_shipping.png';
import './recentSearchCard.scss';

const RecentSearchCard = () => {
    return (
        <Link className='recent-search__card' to="/">
            <figure className='recent-search__image'>
                <img src='https://http2.mlstatic.com/D_Q_NP_673510-MCO48419008668_122021-AB.webp' alt='' title=''/>
            </figure>
            <div className='recent-search__content'>
                <h4 className='recent-search__price'>
                    <span className='recent-search__price-symbol'>$</span>
                    <span className='recent-search__price-fraction'>
                        14.00
                        {/* {parseInt(props.item.price.amount).toLocaleString()} */}
                        {/* {props.item.price.currency} */}
                    </span>
                    <img src={c_shipping} className='recent-search__shiping-free' alt='icon-shiping-free'/>
                    {/* {item.free_shipping ? <img src={c_shipping} className='details-item__shiping-free' alt='icon-shiping-free'/> : null} */}
                </h4>
                <h3 className='recent-search__title'>
                   titulo del contenido
                </h3>
            </div>
        </Link>
    );
}

export default RecentSearchCard;