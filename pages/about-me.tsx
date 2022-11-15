import Head from "next/head"
import Image from "next/image"
import Navbar from "../components/navbar"
import aboutMedata from "../dummy/aboutmeData.json"

interface SocmedType {
  name: string,
  imgurl: string,
  url: string,
}

const AboutMe = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>About Reza</title>
        <meta name="description" content="Social media and tech stack used by Reza Firdaus" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="professional programmer, programmer, fullstack, frontend, experienced programmer, rails, react" />
      </Head>
      <Navbar />
      <div className="container-fluid text-light pt-5">
        <figure className="text-center">
          <blockquote className="blockquote">
            <p>{aboutMedata.header}</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            <cite title="Source Title">{aboutMedata.name}</cite>
          </figcaption>
        </figure><br /><br /><br /><br />

        <div className="text-center" id="tech_stack">
          <h4>Tech Stack</h4><br />
          {aboutMedata.tech_stack.map((tech: string, i) => (
            <p key={i}>{tech}</p>
          ))}
        </div><br /><br /><br /><br />

        <div className="pb-2 text-center">
          <h5>Find me on social media</h5>
          <div className="d-flex justify-content-center mt-3" id="social_media">
            {aboutMedata.socmed.map((soc: SocmedType, i) => (
                <Image src={soc.imgurl} onClick={() => window.open(soc.url)} alt={soc.name} width={60} height={25} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe