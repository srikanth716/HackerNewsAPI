import './Header.css';
import * as Icon from 'react-bootstrap-icons';
import React, { Component } from 'react';
import Section from '../Section/Section';
import Loading from '../Loading/Loading';
import { getStoriesIds, getStoryDetails } from '../Data/getData';

class Header extends Component {

    state = { isLoading: true, searchInput: '', idDetails: '' }

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
        this.setState({
            isLoading: false
        })
    }

    onChangingSearchInput = (event) => {

        this.setState({
            searchInput: event.target.value
        })
    }

    render() {

        const { isLoading, idDetails, searchInput } = this.state

        return (
            isLoading ?
                <Loading /> :
                <div>
                    <header className='headerContainer'>

                        <div className='logoContainer'>
                            <img src='https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png' className='headerLogo' alt='logo' />
                            <span>Search <br /> Hacker News</span>
                        </div>

                        <div className='searchContainer'>
                            <Icon.Search className='searchIcon' />
                            <input type='search' className='searchInput' placeholder='Search stories by title' value={searchInput} onChange={this.onChangingSearchInput}></input>
                        </div>

                        <div className='settingContainer'>
                            <Icon.Gear />
                            <span className='setting'>Settings</span>
                        </div>
                    </header>
                    <Section searchResults={idDetails} searchInput={searchInput} />
                </div>
        )

    }

}

export default Header;