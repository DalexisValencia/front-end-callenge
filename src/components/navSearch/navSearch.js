import { useState } from "react";
import { Link } from "react-router-dom";
import logoDesktop from '../../assets/Logo_ML2x.png';
import logoMobile from '../../assets/Logo_ML.png';
import { useNavigate } from "react-router-dom";
import './navSearch.scss';

const NavSearch = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    function prepareUrl(e){
        setQuery(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.error("asjdhsajd", query);
        navigate(`/items?search=${query}`);
        // history.push(`/items?search=${query}`);
    }
    return (
        <header className="header-search">
            <div className="max-width-element">
                <Link to="/" className="header-search__logo">
                    <picture>
                        <source media="(min-width:600px)" srcSet={logoDesktop} />
                        <img src={logoMobile} alt="Logo Mercado Libre" title="Logo Mercado Libre"/>
                    </picture> 
                </Link>
                <form className="header-search__form-search" onSubmit={(e) => handleSubmit(e)}>
                    <input placeholder="Nunca dejes de buscar" className="header-search__input" onChange={(e) => prepareUrl(e)}/>
                    <button className="header-search__icon" type="submit"></button>
                    {/* <div className="suggestions"></div> */}
                </form>
            </div>
        </header>
    );
}

export default NavSearch;