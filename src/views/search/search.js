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
                    <RecentSearchCard />
                </div>
            </div>
        );
    }

    const body = () => {
        return recentSearches();
    }

    return (
        <section className="search-section__wrapper max-width-element">
            {body()}
            {searches.map((search) => (
                "busqueda"
				// <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
        </section>
    )
}

export default Search;