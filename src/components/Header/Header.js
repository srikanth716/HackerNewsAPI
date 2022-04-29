import './Header.css';
import * as Icon from 'react-bootstrap-icons';
import {Component } from 'react';


class Header extends Component{

    render() {

        return (
            <div>
                <header className='headerContainer'>

                    <div className='logoContainer'>
                        <img src='https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png' className='headerLogo' alt='logo' />
                        <span>Search <br /> Heacker News</span>
                    </div>

                    <div className='searchContainer'>
                        <Icon.Search className='searchIcon' />
                        <input type='search' className='searchInput' placeholder='Search stories by title, url and author'></input>
                    </div>

                    <div className='settingContainer'>
                        <Icon.Gear />
                        <span>Settings</span>
                    </div>

                </header>
            </div>


        )

    }

}

export default Header;