import { Link } from "react-router-dom";
import logoDesktop from '../../assets/Logo_ML@2x.png';
import logoMobile from '../../assets/Logo_ML.png';

import './navSearch.scss';
const NavSearch = () => {
    return (
        <header className="header-search">
            <div className="max-width-element">
                <Link to="/" className="header-search__logo">
                    <picture>
                        <source media="(min-width:600px)" srcset={logoDesktop} />
                        <img src={logoMobile} alt="Logo Mercado Libre" title="Logo Mercado Libre"/>
                    </picture> 
                </Link>
                <form className="header-search__form-search">
                    <input placeholder="Nunca dejes de buscar" name="" className="header-search__input"/>
                    <button className="header-search__icon"></button>
                    {/* <div className="suggestions"></div> */}
                </form>
            </div>
        </header>
    );
}

export default NavSearch;