import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: props.mode === 'dark' ? '#393053' : 'white', borderBottom: '1px solid #DFDFDF' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    {props.title}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                                {props.aboutText}
                            </Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            onClick={props.toggleMode}
                        />
                        <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">
                            Enable {props.modeText} Mode
                        </label>
                    </div>
                </div>
            </div>
        </nav >
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Title',
    aboutText: 'About'
}
