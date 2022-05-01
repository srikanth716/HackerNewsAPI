import logo from '../../logo.svg';
import './Loading.css';

function Loading() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Your page is loading... Please wait!
                </p>
                <span>
                    Thank you
                </span>
            </header>
        </div>
    );
}

export default Loading;
