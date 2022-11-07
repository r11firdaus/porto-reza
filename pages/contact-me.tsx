import Navbar from "../components/navbar"
import contact from "../dummy/contact.json"

// type Contact = {
//   email: string,
//   phone: string,
//   linkedin: string,
// }

const ContactMe = ():JSX.Element => {
  return (
    <div className="bg-dark text-light">
      <Navbar />
      <h3 className="mt-5 mx-3">Contacts</h3>
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <div className="flex-grow-1">
            <h5 className="mb-0">Email</h5>
            <div className="subheading mb-2 text-success"><a href={`mailto:${contact.email}`} target="_blank">{contact.email}</a></div>
            <h5 className="mb-0">Phone</h5>
            <div className="subheading mb-2 text-success">{contact.phone}</div>
            <h5 className="mb-0">Linkedin</h5>
            <div className="subheading mb-2 text-success"><a href={contact.linkedin} target="_blank">{contact.linkedin}</a></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactMe