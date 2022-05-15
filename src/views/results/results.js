import { useState, useEffect } from "react";
import { useSearchParams  } from 'react-router-dom';
import QueriesServices from '../../services/queries.service';
import SearchCard from '../../components/searchCard/searchCard';
import BreadCrumb from '../../components/breadcrumb/breadcrumb';
import Loading from "../../components/loading/loading";
import ErrorAlert from "../../components/error/error";
import './results.scss';

const Results = () => {
    const [error, setError] = useState('');
    const [isLoad, setIsLoad] = useState(false);
    const [items, setItems] = useState([]);
    const [searchParams] = useSearchParams();
    const termSearch = searchParams.get("search");

    useEffect(() => {
        if(termSearch) {
            setIsLoad(true);
            QueriesServices.search(termSearch).then((result) => {
                setItems(result.data.body.items);
                setIsLoad(false);
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
    }, [searchParams, termSearch]);

    function renderError() {
        return <ErrorAlert message={error}/>;
    }

    function renderLoading() {
        return <Loading/>;
    }

    function renderItems() {
        //No items
        if(items.length === 0) {
            return (
                <h3 className="result-card__empty">
                    Lo sentimos tu búsqueda "<b>{termSearch}</b>" no arrojó resultados.
                </h3>
            );
            
        }else {
            return items.map((item, index) => {
                return <SearchCard key={item.id} item={item}/>
            });
        }
    }

    function body() {
        if (isLoad) {
            return renderLoading();
        } else if (!isLoad && error) {
            return renderError()
        }
        else if (!isLoad && !error) {
            return renderItems()
        }
    } 

    return (
        <section className="max-width-element search-result">
            <BreadCrumb crumbs={[{ name: termSearch, url: `/items?search=${termSearch}` }]}/>
            <div className="search-result__wrapper">
                {body()}
            </div>
        </section>
    );
}

export default Results;