import React from "react";
import './Story.css'

const Story = (props) => {

    const { title, by, type, url } = props.story;

    return (
        <li className="listItem">

            <span> <a href={url}>{title}</a></span> <br />
            <div>
                <span>author: {by}</span> | <span>{type}</span>
            </div>

        </li>
    )
}

export default Story