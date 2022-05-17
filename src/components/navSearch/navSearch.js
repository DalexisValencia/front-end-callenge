import { useState } from "react";
import { Link } from "react-router-dom";
import logoDesktop from '../../assets/Logo_ML2x.png';
import logoMobile from '../../assets/Logo_ML.png';
import { useNavigate } from "react-router-dom";
import './navSearch.scss';
import AutoComplete from "../autocomplete/autocomplete";

const NavSearch = () => {
    const [query, setQuery] = useState('');
    const [isLeave, setisLeave] = useState(false);
    const [autocompeteActive, setAutocompeteActive] = useState(true);
    const navigate = useNavigate();

    //Navigate to detail item (Enter o click on icon search) 
    function handleSubmit(e) {
        e.preventDefault();
        navigate(`/items?search=${query}`);
    }

    /*
     * When the user click on input search field make:
     * 1. Set the "mouseLeave" state to true
     * 2. Enable autocomplete compoment
    */
    const focus = () => {
        setisLeave(false);
        setAutocompeteActive(true);
        responseive();
    }

    /*
     * Hide the autocomplete compoment in three cases:
     * 1. The user clicks on a item suggested
     * 2. The user clicks outside input search field and outside autocomplete component
     * 3. The user clicks in logo
    */
    const hideSuggesteds = (item) => {
        setQuery(item);
        setAutocompeteActive(false);
    }

    /*
     * Hidde AutoComplete on blur event when the user is outside of the input search field
    */
    const blur = () => {
        isLeave && hideSuggesteds(query)
    }

    /*
     * wheb the user leave the of the input search field
    */
    const onmouseleave = () => {
        setisLeave(true);
    }

    const responseive = () => {
        const { innerWidth: width, innerHeight: height } = window;
        console.info(window.innerWidth)
    }


    return (
        <header className="header-search">
            <div className="max-width-element">
                <Link to="/" className="header-search__logo" onClick={() => hideSuggesteds('')}>
                    <picture>
                        <source media="(min-width:600px)" srcSet={logoDesktop} />
                        <img src={logoMobile} alt="Logo Mercado Libre" title="Logo Mercado Libre"/>
                    </picture> 
                </Link>
                <form className="header-search__form-search" onSubmit={(e) => handleSubmit(e)} onMouseLeave={onmouseleave}>
                    <input placeholder="Nunca dejes de buscar" onFocus={focus} onBlur={blur} value={query} className="header-search__input" onChange={(e) => setQuery(e.target.value)}/>
                    <button className="header-search__icon" type="submit"></button>
                    {query !== '' && autocompeteActive ? <AutoComplete term={query} clickResult={(item) => hideSuggesteds(item)}/> : null}
                </form>
            </div>
        </header>
    );
}

export default NavSearch;