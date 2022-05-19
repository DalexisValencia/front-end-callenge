import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import QueriesServices from '../../services/queries.service';
import author from '../../services/author';
import BreadCrumb from '../../components/breadcrumb/breadcrumb';
import './details.scss';
import ErrorAlert from "../../components/error/error";
import Loading from "../../components/loading/loading";
import c_shipping from '../../assets/misc/ic_shipping.png';
import { useDispatch, useSelector } from 'react-redux';
import { addSearch } from '../../redux/slices/searches';

const Details = () => {
    const [error, setError] = useState('');
    const [isLoad, setIsLoad] = useState(false);
    const [item, setItem] = useState({});
    const { id } = useParams();
    const dispatch = useDispatch();
    const searches = useSelector((state) => state.searches);

    useEffect(() => {
        if(id) {
            setIsLoad(true);
            QueriesServices.details(id).then((result) => {
                setIsLoad(false);
                if(result.data.error) {
                     setError(result.data.error);

                }else if(!result.data.error) {
                    //data is the model final with all requeriments
                    const data = {
                        author,
                        ...result.data.body,
                    }
                    setItem(data.item);
                    //if state data has content
                    console.warn(searches.length)
                    //if(searches.length) {
                        //Find coinciden inside state 'searches'
                       const found = searches.find(item => item.item.id === result.data.body.item.id);
                       console.warn("sjjsjs", found)
                       //if don't exist coincidences call dispatch
                       found === undefined && dispatch(addSearch(result.data.body));
                    //}
                }
                },
                (error) => {
                    setError(error.message);
                    setIsLoad(false);
                }
            );
        }else {
            setIsLoad(false);
            setError("No existen parámetros de búsqueda");
        }
    }, [id, searches]);

    function TranslateItemStatus(status){
        switch (status) {
            case "new":
                return "Nuevo";
                default:
                break;
        }
    }

    function renderError() {
        return <ErrorAlert message={error}/>;
    }

    function renderLoading() {
        return <Loading />;
    }

    function renderDetail() {
        return (
            <>
                <div className='details-item__summary'>
                    <div className='details-item__image-wrapper'>
                        <figure className='details-item__figure'>
                            <img src={item.picture} alt={item.title} />
                        </figure>
                    </div>
                    
                    <aside className='details-item__column-right'>
                        <span className='details-item__label'>
                            {TranslateItemStatus(item.condition)} - {item.sold_quantity} {item.sold_quantity > 1 ? "vendidos": "vendido"}
                        </span>
                        <h1 className='details-item__name'>
                            {item.title}
                        </h1>
                        <h2 className='details-item__price'>
                            <span className='details-item__price-symbol'>$</span>
                            {item.price ? <span className='details-item__price-fraction'>{parseInt(item.price.amount).toLocaleString()} <sup>00</sup> </span> : null}
                            {item.free_shipping ? <img src={c_shipping} className='details-item__shiping-free' alt='icon-shiping-free'/> : null}
                        </h2>
                        <button className='details-item__buy'>
                            Comprar
                        </button>
                    </aside>
                </div>
                <div className='details-item__description'>
                    <h3 className='details-item__description-title'>
                        Description
                    </h3>
                    <p className='details-item__description-p'>
                       {item.description}
                    </p>
                </div>
            </>
        );
    }

    function body() {
        if (isLoad) {
            return renderLoading();
        } else if (!isLoad && error) {
            return renderError()
        }
        else if (!isLoad && !error && item) {
            return renderDetail()
        }
    }

    return ( 
        <section className='max-width-element details-item'>
            <BreadCrumb crumbs={[{ name: item.title, url: `/items/${id}` }]}/>
            <div className='details-item__wrapper'>
                {body()}
            </div>
        </section>
    )
}

export default Details;