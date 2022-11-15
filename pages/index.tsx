import Head from "next/head";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Reza's Portofolio</title>
        <meta name="description" content="Reza Firdaus portofolio, cv, and projects with various technology" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="professional programmer, programmer, fullstack, frontend, experienced programmer, rails, react" />
      </Head>
      <div className="container-fluid">
        <Navbar />
        <div className="position-absolute top-50 start-50 translate-middle text-light">
          <h2>Welcome To My Portofolio !</h2>
          <p>You can see all my projects and my CV. Press button below to explore.</p>
          {/* <button type="button" className="btn btn-success">Click Here</button> */}
        </div>

        {/* <div className="position-absolute top-100 start-50 translate-middle text-light">
        <button type="button" className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-light rounded-pill" style={{width: '2rem', height: '2rem'}}>V</button>
        </div> */}
      </div>
    </>
  )
}
