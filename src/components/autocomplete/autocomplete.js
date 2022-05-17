import { useState, useEffect } from "react";
import QueriesServices from '../../services/queries.service';
import author from '../../services/author';
import './autocomplete.scss';
import ErrorAlert from "../error/error";
import Loading from "../loading/loading";
import { Link } from "react-router-dom";

const AutoComplete = (props) => {
    const [suggesteds, setSuggested] = useState('');
    const [error, setError] = useState('');
    const [isLoad, setIsLoad] = useState(false);

    useEffect(() => {
        if(props.term !== '') {
            setIsLoad(true);
            QueriesServices.search(props.term).then((result) => {
                //Validate result error inside request
                if(result.data.error){
                    setError(result.data.error);
                    return
                }
                //data is the model final with all requeriments
                const data = {
                    author,
                    ...result.data.body,
                }
                setSuggested(data.items);
                setIsLoad(false);
                },
                (error) => {
                    setError(error.message);
                    setIsLoad(false);
                }
            );
        }
    }, [props.term]);

    // Error Message custom or http call error response
    function renderError() {
        return <ErrorAlert message={error}/>;
    }

    // When the elements are being loaded
    function renderLoading() {
        return <Loading/>;
    }

    // Render elements if exits
    // Render message 'Sin resultados'
    function renderItems(){
        if(suggesteds.length === 0 && suggesteds !== undefined) {
            return (
                <span className="result-card__empty">
                    Sin resultados "<b>{props.term}</b>"
                </span>
            );
            
        }else {
            return <div className="autocomplete__results">
               { 
                    suggesteds.map((item, index) => <Link key={item.id} to={`items/${item.id}`} onClick={() => props.clickResult(item.title)}> {item.title} </Link>)
                }
            </div>;
             
        }
    }

    // Main function to render content
    // Content: Error , loading or results 
    function body() {
        if (isLoad && props.term !== '') {
            return renderLoading();
        } else if (!isLoad && error && props.term !== '') {
            return renderError();
        }
        else if (!isLoad && !error && props.term !== '') {
            return renderItems()
        }
    }

    return(
        <div className="autocomplete__wrapper">
            {body()}
        </div>
    );
}

export default AutoComplete;