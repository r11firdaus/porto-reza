import Navbar from "../components/navbar"
import cvData from "../dummy/cv.json"

const Cv = (): JSX.Element => {
  return (
    <div className="bg-dark text-light px-2">
      <Navbar />
      {/* Experience */}
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h3 className="mb-5"><i><b>Experience</b></i></h3>
          {cvData.experience.map((cv) => (
            <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
              <div className="flex-grow-1">
                  <h5 className="mb-0">{cv.position}</h5>
                  <div className="subheading mb-2 text-secondary">{cv.company}</div>
                  <p>{cv.detail}</p>
              </div>
              <div className="flex-shrink-0"><span className="text-success">{`${cv.start_date} - ${cv.end_date}`}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h3 className="mb-5"><i><b>Education</b></i></h3>
          {cvData.education.map((cv) => (
            <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
              <div className="flex-grow-1">
                  <h5 className="mb-0">{cv.level}</h5>
                  <div className="subheading mb-2 text-secondary">{cv.company}</div>
                  <p>{cv.detail}</p>
              </div>
              <div className="flex-shrink-0"><span className="text-success">{`${cv.start_date} - ${cv.end_date}`}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* PDF LINK */}
      <section className="resume-section" id="pdf_link">
        <p>For full detail about my CV, <a href={cvData.pdf_link} target="_blank"><u>Cilck Here</u></a></p>
      </section>
    </div>
  )
}

export default Cv