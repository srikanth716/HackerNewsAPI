import React from 'react';
import './Section.css'
import Story from '../StoryList/Story';
import SectionLoading from '../Loading/SectionLoading';

const Section = (props) => {

    const searchResults = props.searchResults
    const input = props.searchInput

    if (!searchResults) {

        return <SectionLoading />
    }
    else {

        let result = searchResults.filter((story) => (story.title.toUpperCase()).includes((input.toUpperCase())))
        return (
            < div >
                <ul className='sectionContainer'>
                    {result.map((story) => {
                        return <Story key={story.id} story={story} />
                    })}

                </ul>
            </div >
        )
    }
}


export default Section;
