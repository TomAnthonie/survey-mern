import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a className="btn google" href="/auth/google">Login with Google</a></li>;
            default:
                return [
                <li key="1"><Payments /></li>,
                <li key="2" style={{ margin: '0 10px' }} className="orange-text">
                    Credits: {this.props.auth.credits}
                    </li>,
                <li key="3"><a className="btn logout" href="/api/logout">Logout</a></li>
        ];
        }
    }
    render() {
        return (
            <nav className="grey darken-3">
                <div className="nav-wrapper">
                    <Link style={{ margin: '0 15px' }} to={this.props.auth ? '/surveys' : '/'} className="btn home">
                    Survey Dashboard
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>        
        );
    }
}


    function mapStateToProps({ auth }) {
        return { auth };
    }


export default connect(mapStateToProps)(Header);