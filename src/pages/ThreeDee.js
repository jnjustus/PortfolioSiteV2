import * as React from 'react'
import { Link } from 'gatsby'
import { Header, Layout, Project } from '../components';
import project1Image from '../images/Sample Group.png';

const ThreeDee = (props) => {
  return (
    <Layout path={props.location.pathname}>
      <title>3D - Jared Justus</title>
      <Project
        name="Make a Wish project for J.B. Hunt"
        date="2017-Current"
        img={
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/nrH9uaFQEwM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        }
        desc="I worked alongside one other developer to create and deliver a experience for Make a Wish. We worked with J.B. Hunt and Make a Wish to storyboard the experience and interactions. This experience was built over 4 weeks."
        tags={["Unreal", "Blueprints", "Scripting", "VR"]}
      />
      <Project
        name="VR work for J.B. Hunt"
        date="2017-Current"
        img={
          <img src={project1Image} alt="project1Image"/>
        }
        desc="I worked alongside two other developers to create several VR experiences that were setup at the Great American Trucking Show and Mid American Trucking show. These demonstrated a day in the life of a driver while using the Carrier 360 app. Users are able to interact with objects in the 18 Wheeler, drive and interact with the Carrier app at various points to show it's features and benefits. Several versions of this experience were created for different apps. Two other experiences built in Unreal with the same team made it to the final round of two seperate hackathons."
        tags={["Unreal", "Blueprints", "Scripting", "VR"]}
      />
      <Project
        name="AR work for Rockfish"
        date="2015-2017"
        img={
          <img src={project1Image} alt="project1Image"/>
        }
        desc="While at Rockfish I worked on several AR experiences for clients. Working with a creative team to build out several AR experiences for mobile devices using Unity. I worked alongside one developer to script, animate, and deliver these experiences."
        tags={["Unity", "C#", "Scripting", "AR"]}
      />
            <Project
        name="VR work for Rockfish"
        date="2015-2017"
        img={
          <img src={project1Image} alt="project1Image"/>
        }
        desc="During my time at Rockfish I worked on several 360 Video experiences in VR. I worked alongside one other developer to implemement a 360 video experience for users who were new to VR. We worked to create a hand free experience that could be navigated easily without instruction. Several installations of the experience were avaliable for the public to enjoy."
        tags={["Unity", "C#", "Scripting", "VR"]}
      />
            <Project
        name="NWA Tech Fest Demo"
        date="2017"
        img={
          <img src={project1Image} alt="project1Image"/>
        }
        desc="This prototype was created for a presentation I gave at the North West Arkansas Tech Fest. Built for the Vive VR headset and VR tracking puck using Unity. Using a tracker on a real tennis racket to create a tennis target game. The presentation went through the creation process and how VR and physical objects could be leveraged for unique experiences."
        tags={["Unity", "C#", "Scripting", "VR"]}
      />
    </Layout>
  )
}
export default ThreeDee