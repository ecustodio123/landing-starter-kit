import Button from "../primitives/Button";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function ContactBlock() {
  return (
    <section className="surface-section">
      <Container>
        <SectionHeading title="Contact Block" description="Reusable contact section with form + map." />
        <div className="contact-block">
          <article className="contact-panel">
            <div className="form-grid">
              <input className="input" placeholder="Full Name*" />
              <input className="input" placeholder="Phone*" />
            </div>
            <input className="input" placeholder="Email*" style={{ marginTop: "0.7rem" }} />
            <select className="select" style={{ marginTop: "0.7rem" }} defaultValue="">
              <option value="" disabled>
                Interested in
              </option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
            <textarea className="textarea" rows="5" placeholder="Message" style={{ marginTop: "0.7rem" }} />
            <Button className="w-full" style={{ marginTop: "0.7rem" }}>
              Submit
            </Button>
          </article>

          <article className="contact-panel">
            <iframe
              title="Demo map"
              src="https://maps.google.com/maps?q=New%20Jersey&t=&z=11&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />
          </article>
        </div>
      </Container>
    </section>
  );
}

export default ContactBlock;
