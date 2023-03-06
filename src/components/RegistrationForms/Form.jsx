import { useState, useEffect } from "react";
import "./Form.css";

function Form() {
  const initialValues = { Name: "",RegdNo: "", Branch: "", event:"", email: "", ContactNo: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.Name) {
      errors.Name = "Name is required!";
    }
    if (!values.RegdNo) {
      errors.RegdNo = "RegdNo is required!";
    }
    if (!values.Branch) {
      errors.Branch = "Branch is required!";
    }
    if (!values.Event) {
      errors.Event = "Event is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.ContactNo) {
      errors.ContactNo = "ContactNo is required!";
    }
    return errors;
  };

  return (
    <div className="form-container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) 
      : (
        <pre>
        </pre>
      )}

      <form onSubmit={handleSubmit}>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="flex flex-row max-h-64 overflow-hidden overflow-y-auto">
          <div className="">
          <label>Name</label>
          <label>Regd No</label>
          <label>Branch</label>
          <label>Event</label>
          <label>Email</label>
          <label>Contact No</label>
          </div>
          <div className="forminputs">
          <input
              type="text"
              name="Name"
              placeholder="Name"
              autoComplete="off"
              value={formValues.Name}
              onChange={handleChange}
              required
            />
          <input
              type="text"
              name="RegdNo"
              placeholder="Regd No"
              autoComplete="off"
              value={formValues.RegdNo}
              onChange={handleChange}
              required
            />
          <input
              type="text"
              name="Branch"
              placeholder="Branch"
              autoComplete="off"
              value={formValues.Branch}
              onChange={handleChange}
              required
            />
            <select name="Events" id="">
              <option value={formValues.event}>event1</option>
              <option value={formValues.event}>event2</option>
              <option value={formValues.event}>event3</option>
              <option value={formValues.event}>event4</option>
            </select>
          <input
              type="text"
              name="email"
              placeholder="Email"
              autoComplete="off"
              value={formValues.email}
              onChange={handleChange}
              required
            />
          <input
              type="text"
              name="ContactNo"
              placeholder="Contact No"
              autoComplete="off"
              value={formValues.ContactNo}
              onChange={handleChange}
              required
            />
          </div>
          </div>
          <button className="submit fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;