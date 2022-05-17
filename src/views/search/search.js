import { useSelector } from 'react-redux';
import './search.scss';

const Search = () => {
    const searches = useSelector((state) => state.searches);

    return (
        <section className="search-section__wrapper max-width-element">
            <div className="search-section__welcome">
                Los mejores productos te esperan ...
            </div>
            {searches.map((search) => (
                "busqueda"
				// <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
        </section>
    )
}

export default Search;