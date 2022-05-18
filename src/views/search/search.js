import { useSelector } from 'react-redux';
import RecentSearchCard from '../../components/recentSearchCard/recentSearchCard';
import './search.scss';

const Search = () => {
    const searches = useSelector((state) => state.searches);

    const emptySearches = () => {
        return (
            <div className="search-section__welcome">
                Los mejores productos te esperan ...
            </div>
        );
    }

    const recentSearches = () => {
        return (
            <div className='search-section__recents'>
                <h2 className='recents__title'>
                    Busquedas Recientes
                </h2>
                <div className='recents__searches'>
                    {searches.map((search) => <RecentSearchCard item={search.item} key={search.item.id}/>)}
                </div>
            </div>
        );
    }

    const body = () => {
        return searches.length ? recentSearches() : emptySearches();
    }

    return (
        <section className="search-section__wrapper max-width-element">
            {body()}
        </section>
    )
}

export default Search;