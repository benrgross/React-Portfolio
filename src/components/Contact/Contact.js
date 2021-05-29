import "./style.css";

function Contact() {
  return (
    <div className="container form d-flex justify-content-center">
      <form className="contact shadow">
        <div className="form-group">
          <p className="contact-info">Benjamin Gross</p>

          <p className="contact-info">
            Email: <a href="mailto:benrgross@gmail.com">benrgross@gmail.com </a>
          </p>
          <p className="contact-info">Location: Brooklyn, NY</p>
          <p className="contact-info">
            {" "}
            Willing to relocate to: Los Angeles, London, EU and work remotely.
          </p>

          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <br></br>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
