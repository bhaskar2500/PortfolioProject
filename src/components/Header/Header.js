import React from 'react';
import './Header.css';
import pp from './pp2.jpg';


class Header extends React.Component {

    render() {
        return (
            <header className="AppHeader">
                <div>
                    Welcome To Bhaskar's Portfolio
            </div>

                <div className="profilePic">

                    <button className="IalUJ " title="Change Profile Photo">

                        <img width="90"alt="Change Profile Photo" className="be6sR" src={pp} />

                    </button>
                </div>
            </header>
        )
    }

}


export { Header }
