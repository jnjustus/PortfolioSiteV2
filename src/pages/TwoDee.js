import * as React from 'react'
import { Link } from 'gatsby'
import { Header, Layout, Project } from '../components';
import project1Image from '../images/Sample Group.png';
import vectorSelf from '../images/Portrait_Color_large.jpg';
import endlessEscape from '../images/main_mockup_hd_1.png';


const TwoDee = (props) => {
  return (
    <Layout path={props.location.pathname}>
      <title>2D - Jared Justus</title>
      <Project
        name="Illustration"
        date="2017"
        img={
          <img src={project1Image} alt="project1Image"/>
        }
        desc="This logo was completed for a local NWA business. The entire logo from concept to completion was done on an iPad Pro with Apple Pencil."
        tags={["Concept", "Vector", "Logo"]}
      />
      <Project
        name="Momentum Games Logo"
        date="2011"
        img={
          <img src={project1Image} alt="project1Image"/>
        }
        desc="The completed Momentum games logo redesign. I wanted to create a recognizable logo that emphisized momentum and displayed well for print and animation."
        tags={["Sketch", "Vector", "Logo"]}
      />
            <Project
        name="Endless Escape"
        date="2011"
        img={
          <img src={endlessEscape} alt="endlessEscape"/>
        }
        desc="This is a menu design for a iOS game which was I was Lead artist for in 2011-12 the game was eventually cancelled. This is a menu that was animated and accessable in game, with animated sprites for gameplay also created by myself."
        tags={["Pixel", "Animation", 'GameArt']}
      />
            <Project
        name="Vector Portrait"
        date="2010"
        img={
          <img src={vectorSelf} alt="vectorSelf"/>
        }
        desc="This vector illustration was created for a course while at UALR. The task was to created a self portrait made up entirely of vectors. I recived a A on the project."
        tags={["Illustrator", "Vector"]}
      />
    </Layout>
  )
}
export default TwoDee