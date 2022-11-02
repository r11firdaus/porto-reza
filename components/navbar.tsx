import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = (): JSX.Element => {
  const router = useRouter()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about-me">About Me</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="#">Portofolio</Link></li>
                <li><Link className="dropdown-item" href="#">CV</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" href="#">Contact me</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Reza Firdaus</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2 bg-dark disabled" onClick={() => router.push('/search')} type="search" placeholder="Search" aria-label="Search" />
            {/* <Link href='#' className="btn btn-outline-success" type="submit">Search</Link> */}
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar