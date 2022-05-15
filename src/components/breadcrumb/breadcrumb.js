import { Link } from "react-router-dom";
import './breadcrumb.scss';

const BreadCrumb = () => {
    return(
        <nav className="breadcrumb">
            <ul>
                <li>
                    <Link to="/">item 1</Link>
                </li>
                <li className="breadcrumb__arrow">&gt;</li>
                <li>
                    <Link to="/">item 2</Link>
                </li>
            </ul>
        </nav>
    );
}

export default BreadCrumb;