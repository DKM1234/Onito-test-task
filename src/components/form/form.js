import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";

function FormComponent() {
  const [idName, setIdName] = useState("");
  const [idNumber, setIdNumber] = useState("");

  const handleIdNameChange = (event) => {
    setIdName(event.target.value);
    setIdNumber("");
  };

  const handleIdNumberChange = (event) => {
    const inputValue = event.target.value;
    if (idName === "aadhar") {
      const numericInputValue = inputValue.replace(/[^0-9]/g, "");
      setIdNumber(numericInputValue);
    } else if (idName === "pan") {
      const uppercaseInputValue = inputValue.toUpperCase();
      setIdNumber(uppercaseInputValue);
    } else {
      setIdNumber(inputValue);
    }
  };

  const getPlaceholder = () => {
    if (idName === "aadhar") {
      return "Enter Aadhar Number";
    } else if (idName === "pan") {
      return "Enter PAN Number";
    } else {
      return "Enter Govt ID";
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    dateOfBirthOrAge: "",
    sex: "",
    mobileNumber: "",
    governmentId: "",
    graduationDetails: "",
    formGraduationName: "",
    email: "",
    emergencyContactNumber: "",
    address: "",
    state: "",
    city: "",
    country: "",
    pinCode: "",
    occupation: "",
    religion: "",
    marriedStatus: "",
    bloodGroup: "",
    nationality: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://95efqh7zh3.execute-api.ap-south-1.amazonaws.com/user",
        formData
      );
      console.log(response.data);

      reset();
      // alert('Data Sent Successfully, Go To Table');
    } catch (error) {
      console.error(error);
    }
  };

  const reset = () => {
    setFormData({
      name: "",
      dateOfBirthOrAge: "",
      sex: "",
      mobileNumber: "",
      governmentId: "",
      graduationDetails: "",
      formGraduationName: "",
      email: "",
      emergencyContactNumber: "",
      address: "",
      state: "",
      city: "",
      country: "",
      pinCode: "",
      occupation: "",
      religion: "",
      marriedStatus: "",
      bloodGroup: "",
      nationality: "",
    });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{ color: "", backgroundColor: "#f1e6e6" }}
      className="container"
    >
      <span>&nbsp;</span>
      <h5 className="mb-2 mt-0">
        <u>Personal Detail</u>
      </h5>
      <Row>
        <Col>
          <Form.Group controlId="formName">
            <Form.Label>
              Name<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              autoFocus
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formDateOfBirthOrAge">
            <Form.Label>
              Date of Birth or Age<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="dateOfBirthOrAge"
              placeholder="DD/MM/YYYY or Age in Years"
              value={formData.dateOfBirthOrAge}
              onChange={handleChange}
              onFocus={(e) => (e.currentTarget.type = "date")}
              onBlur={(e) => {
                if (e.currentTarget.value === "") {
                  e.currentTarget.type = "text";
                  e.currentTarget.value = "DD/MM/YYYY or Age in Years";
                } else {
                  e.currentTarget.type = "date";
                }
              }}
              required
              pattern="\d{1,2}/\d{1,2}/\d{4}"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formSex">
            <Form.Label>
              Sex<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Select
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              required
            >
              <option value="">Select sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formMobileNumber">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              placeholder="Enter Mobile"
              onChange={handleChange}
              pattern="^(\+91|0)?[6789]\d{9}$"
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formGovernmentIdName">
            <Form.Label>Government ID</Form.Label>
            <Form.Select
              name="governmentId"
              value={idName}
              onChange={handleIdNameChange}
              required
            >
              <option value="">Select ID</option>
              <option value="aadhar">Aadhar</option>
              <option value="pan">Pan</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formGovernmentIdNumber">
            <Form.Label>ID Number</Form.Label>
            <Form.Control
              type="text"
              name="governmentIdNumber"
              value={idNumber}
              onChange={handleIdNumberChange}
              placeholder={getPlaceholder()}
              maxLength={idName === "aadhar" ? 12 : 10}
              minLength={idName === "aadhar" ? 12 : 10}
              pattern={idName === "aadhar" ? "[0-9]{12}" : "[A-Z0-9]{10}"}
              title={
                idName === "aadhar"
                  ? "Aadhar number must be 12 digits"
                  : "PAN number must be 10 characters (capital letters and numbers only)"
              }
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <h5 className="mb-2 mt-4">
        <u>Contact Detail</u>
      </h5>
      <Row>
        <Col>
          <Form.Group controlId="formGraduationDetails">
            <Form.Label>Guardian Details</Form.Label>
            <Form.Select
              name="graduationDetails"
              value={formData.graduationDetails}
              onChange={handleChange}
              required
            >
              <option value="">Select Label</option>
              <option value="addhar">ABCD-Text</option>
              <option value="pan">ABCD-Text-Other</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formGraduationName">
            <Form.Label>Graduation Name</Form.Label>
            <Form.Control
              type="text"
              name="formGraduationName"
              value={formData.formGraduationName}
              placeholder="Enter Graduation Name"
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter Email"
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formEmergencyContactNumber">
            <Form.Label>Emergency Contact Number</Form.Label>
            <Form.Control
              type="text"
              name="emergencyContactNumber"
              placeholder="Enter Emergency Number"
              value={formData.emergencyContactNumber}
              onChange={handleChange}
              pattern="^(\+91|0)?[6789]\d{9}$"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <h5 className="mb-2 mt-4">
        <u>Address Detail</u>
      </h5>
      <Row>
        <Col>
          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              placeholder="Enter Address"
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formState">
            <Form.Label>State</Form.Label>
            <Form.Select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">Select State</option>
              <option value="madhya pradesh">Madhya Pradesh</option>
              <option value="uttar pradesh">Uttar Pradesh</option>
              <option value="hariyana">Hariyana</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Select
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            >
              <option value="">Select City</option>
              <option value="indore">Indore</option>
              <option value="bhopal">Bhopal</option>
              <option value="ujjain">Ujjain</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formCountry">
            <Form.Label>Country</Form.Label>
            <Form.Select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select Country</option>
              <option value="india">India</option>
              <option value="u.s.a.">U.S.A.</option>
              <option value="canada">Canada</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formPinCode">
            <Form.Label>Pin Code</Form.Label>
            <Form.Control
              type="text"
              name="pinCode"
              value={formData.pinCode}
              placeholder="Enter Pincode"
              onChange={(e) => {
                const re = /^[0-9\b]{0,6}$/;
                if (e.target.value === "" || re.test(e.target.value)) {
                  handleChange(e);
                }
              }}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formPinCode">
            <Form.Label></Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <h5 className="mb-2 mt-4">
        <u>Other Detail</u>
      </h5>
      <Row>
        <Col>
          <Form.Group controlId="formOccupation">
            <Form.Label>Occupation</Form.Label>
            <Form.Control
              type="text"
              name="occupation"
              value={formData.occupation}
              placeholder="Enter Occupation"
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formReligion">
            <Form.Label>Religion</Form.Label>
            <Form.Select
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              required
            >
              <option value="">Select Religion</option>
              <option value="hindu">Hindu</option>
              <option value="muslim">Muslim</option>
              <option value="other">Other</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formMarriedStatus">
            <Form.Label>Married Status</Form.Label>
            <Form.Select
              name="marriedStatus"
              value={formData.marriedStatus}
              onChange={handleChange}
              required
            >
              <option value="">Select Married Status</option>
              <option value="married">Married</option>
              <option value="unmarried">Unmarried</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formBloodGroup">
            <Form.Label>Blood Group</Form.Label>
            <Form.Select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            >
              <option value="">Select Blood Group</option>
              <option value="a+">A+</option>
              <option value="a-">A-</option>
              <option value="b+">B+</option>
              <option value="b-">B-</option>
              <option value="o+">O+</option>
              <option value="o-">O-</option>
              <option value="ab+">AB+</option>
              <option value="ab-">AB-</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formNationality">
            <Form.Label>Nationality</Form.Label>
            <Form.Select
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              required
            >
              <option value="">Select Nationality</option>
              <option value="indian">Indian</option>
              <option value="other">Other</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formNationality">
            <Form.Label></Form.Label>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formNationality">
            <Form.Label></Form.Label>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formNationality">
            <Form.Label></Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="danger"
          type="button"
          onClick={reset}
          className="mb-4 mt-4"
        >
          Cancel
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="primary" type="submit" className="mb-4 mt-4">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default FormComponent;
