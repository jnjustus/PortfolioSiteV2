import * as React from 'react'
import { Link } from 'gatsby';
import "./Project.scss"

export const Project = ({ name, date, img, desc, tags }) => {
    let nameAndDate = `${name} -- ${date}`
return (
<div className="projectContainer">
    <div className="nameContainer">
        <h2>{nameAndDate}</h2>
    </div>
    <div className="projectInfoContainer">
        <div className="projectInfoLeft">
               {img}
        </div>
        <div className="projectInfoRight">
            <div className="projectDesc">
                {desc}
            </div>
            <div className="projectTags">
               {tags.map((tag) => <span className="tag">{tag}</span>)}
            </div>
        </div>
    </div>
</div>
);
}
