import "./style.css";

function Contact() {
  return (
    <div className="container form d-flex justify-content-center">
      <form className="contact shadow">
        <div className="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input
            type="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="John Doe"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Email address</label>
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
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
