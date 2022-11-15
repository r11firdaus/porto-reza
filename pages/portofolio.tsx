import Head from "next/head"
import Navbar from "../components/navbar"
import portoData from "../dummy/portoData.json"

const Portofolio = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Reza's Projects</title>
        <meta name="description" content="All Projects created by Reza Firdaus" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="professional programmer, programmer, fullstack, frontend, experienced programmer, rails, react, blog, e-commerce, food, recipe" />
      </Head>
      <div>
        <Navbar /><br /><br /><br /><br /><br /><br />
        <figure className="text-center text-light">
          <blockquote className="blockquote">
            <p>All my projects using React, Next JS, Ruby on Rails, etc.</p>
          </blockquote>
        </figure><br /><br /><br /><br /><br /><br />

        <div className="row mx-2">
          {portoData.map((e, i) => (
            <div className="col-12 col-md-6 py-1 px-1" key={i}>
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <h4 className="card-title">{e.title}</h4>
                  <p className="card-text">{e.desc}</p>
                  <a href="#" onClick={()=> window.open(e.url)} className="btn btn-success">Visit Web</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Portofolio