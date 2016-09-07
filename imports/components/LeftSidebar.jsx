import React from 'react';
import { Link } from 'react-router';

export default class LeftSidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="left-sidebar">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="srizon-logo">
                            <Link to="/">
                                <img src="/images/logo.svg" alt="Srizon Logo"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <nav className="left-menu">
                            <ul>
                                <li><Link to="/" activeClassName={(this.props.path === '/')?'active':''}>Home<i className="fa fa-home"></i></Link></li>
                                <li><Link to="/products" activeClassName="active">Products<i className="fa fa-home"></i></Link></li>
                                <li><Link to="/services" activeClassName="active">Services<i className="fa fa-home"></i></Link></li>
                                <li><Link to="/support" activeClassName="active">Support/Contact<i className="fa fa-home"></i></Link></li>
                                <li><Link to="/blog" activeClassName="active">Blog<i className="fa fa-home"></i></Link></li>
                                <li><Link to="/tutorials" activeClassName="active">Tutorials<i className="fa fa-home"></i></Link></li>
                                <li><Link to="/login" activeClassName="active">Login<i className="fa fa-home"></i></Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}