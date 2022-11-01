export default function Home() {
  return (
    <>
      <div className="container-fluid vh-100 bg-dark">
        <div className="position-absolute top-50 start-50 translate-middle text-light">
          <h2>Welcome To My Portofolio !</h2>
          <p>You can see all my projects and my CV. Press button below to explore.</p>
          <button type="button" className="btn btn-success">Click Here</button>
        </div>

        {/* <div className="position-absolute top-100 start-50 translate-middle text-light">
        <button type="button" className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-light rounded-pill" style={{width: '2rem', height: '2rem'}}>V</button>
        </div> */}
      </div>
    </>
  )
}
