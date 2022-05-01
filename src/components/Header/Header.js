import './Header.css';
import * as Icon from 'react-bootstrap-icons';
import React, { Component } from 'react';
import Section from '../Section/Section';
import { getStoriesIds, getStoryDetails } from '../Data/getData';

class Header extends Component {

    state = { searchInput: '', idDetails: '' }

    async componentDidMount() {

        await getStoriesIds()
            .then((data) => {
                getStoryDetails(data)
                    .then((details) => {
                        this.setState({
                            idDetails: details
                        })
                    })

            })
    }

    onChangingSearchInput = (event) => {

        this.setState({
            searchInput: event.target.value
        })
    }


    render() {

        const { idDetails, searchInput } = this.state
        if (idDetails) {
            return (
                <div>
                    <header className='headerContainer'>

                        <div className='logoContainer'>
                            <img src='https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png' className='headerLogo' alt='logo' />
                            <span>Search <br /> Heacker News</span>
                        </div>

                        <div className='searchContainer'>
                            <Icon.Search className='searchIcon' />
                            <input type='search' className='searchInput' placeholder='Search stories by title' value={searchInput} onChange={this.onChangingSearchInput}></input>
                        </div>

                        <div className='settingContainer'>
                            <Icon.Gear />
                            <span>Settings</span>
                        </div>
                    </header>
                    <Section searchResults={idDetails} searchInput={searchInput} />
                </div>
            )
        }

    }

}

export default Header;