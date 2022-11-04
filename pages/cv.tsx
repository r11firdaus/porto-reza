import Navbar from "../components/navbar"
import cvData from "../dummy/cv.json"

const cv = (): JSX.Element => {
  return (
    <div className="bg-dark text-light px-2">
      <Navbar />
      <h2 className="card-title mt-3 mx-3">Curriculum Vitae</h2>
      {/* Experience */}
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h3 className="mb-5"><i>Experience</i></h3>
          {cvData.experience.map((cv) => (
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                  <h5 className="mb-0">{cv.position}</h5>
                  <div className="subheading mb-3">{cv.company}</div>
                  <p>{cv.detail}</p>
              </div>
              <div className="flex-shrink-0"><span className="text-success">{`${cv.start_date} - ${cv.end_date}`}</span></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default cv