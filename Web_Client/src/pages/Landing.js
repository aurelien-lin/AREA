import './Landing.css'
import ldbg from '../assets/ldbg.png';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div className="landing-bg">
            <img src={ldbg} className="landing-bg" alt="background" />
            <Link to="/SignForm">
                <button variant="outline-light" size="lg" className="start-button">
                    <p className="button-text">Start for free</p>
                </button>
            </Link>
        </div>
    );
}

export default Landing;
