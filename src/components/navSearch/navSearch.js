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
    const [inmobile, setinmobile] = useState('');
    const [autocompeteActive, setAutocompeteActive] = useState(true);
    const navigate = useNavigate();
    
    //Navigate to detail item (Enter o click on icon search) 
    function handleSubmit(e) {
        e.preventDefault();
        navigate(`/items?search=${query}`);
        hideSuggesteds('');
    }

    /*
     * When the user click on input search field make:
     * 1. Set the "mouseLeave" state to true
     * 2. Enable autocomplete compoment
     * 3. Check if window.width is less than 599 and create a class for animate from
    */
    const focus = () => {
        setisLeave(false);
        setAutocompeteActive(true);
        window.innerWidth <= 599 && setinmobile('focus-mobile');
    }

    /*
     * Hide the autocomplete compoment in four cases:
     * 1. The user clicks on a item suggested
     * 2. The user clicks outside input search field and outside autocomplete component
     * 3. The user clicks in logo
     * 4. The user submits the form
    */
    const hideSuggesteds = (item) => {
        setQuery(item);
        setAutocompeteActive(false);
    }

    /*
     * Hidde AutoComplete on blur event when the user is outside of the input search field
    */
    const blur = () => {
        isLeave && hideSuggesteds(query);
        window.innerWidth <= 599 && setinmobile('');
    }

    /*
     * wheb the user leave the of the input search field
    */
    const onmouseleave = () => {
        setisLeave(true);
    }

    return (
        <header className="header-search">
            <div className="max-width-element">
                {/* <Link to="/" className="header-search__logo" onClick={() => hideSuggesteds('')}>
                    <picture>
                        <source media="(min-width:600px)" srcSet={logoDesktop} />
                        <img src={logoMobile} alt="Logo Mercado Libre" title="Logo Mercado Libre"/>
                    </picture>
                </Link> */}
                <form className={`header-search__form-search ${inmobile}`} onSubmit={(e) => handleSubmit(e)}>
                    <input placeholder="Nunca dejes de buscar" onFocus={focus} onBlur={blur} value={query} className="header-search__input" onChange={(e) => setQuery(e.target.value)}/>
                    <button className="header-search__icon" type="submit"></button>
                    {query !== '' && autocompeteActive ? <AutoComplete term={query} clickResult={(item) => hideSuggesteds(item)} onMouseLeave={onmouseleave}/> : null}
                </form>
            </div>
        </header>
    );
}

export default NavSearch;