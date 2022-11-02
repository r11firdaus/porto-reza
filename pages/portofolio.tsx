import Image from "next/image"
import Navbar from "../components/navbar"

const Portofolio = (): JSX.Element => {
  const portoData = [
    {
      title: 'E-commerce',
      desc: 'blablabalablablalblal',
      url: 'https://jwallin.vercel.app'
    },
    {
      title: 'Blog',
      desc: 'blablabalablablalblal',
      url: 'https://warm-fortress-73594.herokuapp.com/'
    },
    {
      title: 'Blog with pdf and excel',
      desc: 'blablabalablablalblal',
      url: 'https://secure-coast-07934.herokuapp.com/'
    },
    {
      title: 'Food Recipe',
      desc: 'blablabalablablalblal',
      url: 'https://r11firdaus.github.io/wtfood'
    },
  ]
  return (
    <div className="bg-dark">
      <Navbar /><br /><br />
      <figure className="text-center text-light">
        <blockquote className="blockquote">
          <p>All my projects using React, Next JS, Ruby on Rails, etc.</p>
        </blockquote>
      </figure>

      <div className="row mx-2">
        {portoData.map(e => (
          <div className="col-12 col-md-6 py-1 px-1">
            <div className="card bg-dark text-light">
              <div className="card-body">
                <h5 className="card-title">{e.title}</h5>
                <p className="card-text">{e.desc}</p>
                <a href="#" onClick={()=> window.open(e.url)} className="btn btn-success">Visit Web</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portofolio