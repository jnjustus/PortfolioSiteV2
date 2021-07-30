import * as React from "react"
import { Header, Layout, Project, About } from '../components';
import project1Image from '../images/Sample Group.png';

const IndexPage = (props) => {
  return (
    <Layout path={props.location.pathname}>
      <title>About Me - Jared Justus</title>
      <About
        name="Jared Justus"
        img={
          <img src={project1Image} alt="project1Image"/>
        }
        desc="Hi this is my new site and its simple, but hopefully not boxy or old looking. I just wanted to show my projects in a clean and simple way."
      />
    </Layout>
  )
}

export default IndexPage
