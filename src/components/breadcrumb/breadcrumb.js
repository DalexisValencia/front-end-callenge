import { Link } from "react-router-dom";
import './breadcrumb.scss';

const BreadCrumb = (props) => {
    const homeCrumb = {
        name: 'Home',
        url: '/' 
    };

    function buildCrumbs(){
        const localBreadCrumbs = [ homeCrumb, ...props.crumbs ];
        const arrow = <li className="breadcrumb__arrow">&gt;</li>;
        return localBreadCrumbs.map((crumb, index)=>
            <>
                <li key={crumb.name}>
                    <Link to={crumb.url}>{crumb.name}</Link>
                </li>
                {index+1 < localBreadCrumbs.length ? arrow : null }
            </>
        );
    }
    return(
        <nav className="breadcrumb">
            <ul>
                {buildCrumbs()}
            </ul>
        </nav>
    );
}

export default BreadCrumb;