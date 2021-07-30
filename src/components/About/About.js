import * as React from 'react'
import { Link } from 'gatsby';
import "./About.scss"

export const About = ({ name, date, img, desc, tags }) => {
return (
<div className="aboutContainer">
    <div className="nameContainer">
        <hr />
        <h2>{name}</h2>
        <hr />
    </div>
    <div className="projectInfoContainer">
        <div className="projectInfoLeft">
               {img}
        </div>
        <div className="projectInfoRight">
            <div className="projectDesc">
                {desc}
            </div>
        </div>
    </div>
</div>
);
}
