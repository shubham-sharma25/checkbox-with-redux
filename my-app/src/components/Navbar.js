import React from 'react';
class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li className="nav-text">LOGO</li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-text">Home</li>
                        <li className="nav-text">My Portfolio</li>
                        <li className="nav-text">Clients</li>
                        <li className="nav-text">Get in Touch</li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar