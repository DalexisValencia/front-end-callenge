import { Link } from "react-router-dom";
import './breadcrumb.scss';

const BreadCrumb = (props) => {
    const homeCrumb = {
        name: 'Home',
        url: '/' 
    };

    const buildCrumbs = function(){
        const localBreadCrumbs = [ homeCrumb, ...props.crumbs ];
        return localBreadCrumbs.map((crumb, index)=>
                <li key={index}>
                    <Link to={crumb.url}>{crumb.name}</Link>
                </li>
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