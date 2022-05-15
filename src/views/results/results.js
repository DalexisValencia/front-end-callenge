import QueriesServices from '../../services/queries.service';
import SearchCard from '../../components/searchCard/searchCard';
import BreadCrumb from '../../components/breadcrumb/breadcrumb';
import './results.scss';
const Results = () => {

    function example() {
        QueriesServices.search('camisas').then((result) => {
            // setIsLoaded(true);
            // setItems(result.bikes);
            console.info(result, 'result')
            },
            (error) => {
                // setIsLoaded(true);
                // setError(error);
                // console.warn(error);
            }
        );
    }
    return (
        <section className="max-width-element search-result">
            <BreadCrumb />
            <div className="search-result__wrapper">
                <SearchCard/>
                <SearchCard/>
                <SearchCard/>
                <SearchCard/>
            </div>
            <button onClick={() => example()}>
                Buscar algo
            </button>
        </section>
    )
}

export default Results;