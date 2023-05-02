import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";

function FormComponent() {
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
        "http://localhost:8000/form-data",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
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
              type="date"
              name="dateOfBirthOrAge"
              value={formData.dateOfBirthOrAge}
              placeholder="DD/MM/YYYY or Age in Years"
              onChange={handleChange}
              required
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
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              placeholder="Enter Mobile"
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formGovernmentId">
            <Form.Label>Government ID</Form.Label>
            <Form.Select
              name="governmentId"
              value={formData.governmentId}
              onChange={handleChange}
              required
            >
              <option value="">Select ID</option>
              <option value="addhar">ADDHAR</option>
              <option value="pan">PAN</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formGovernmentId">
            <Form.Label>ID Number</Form.Label>
            <Form.Control
              type="phone"
              name="governmentId"
              value={formData.governmentId}
              onChange={handleChange}
              placeholder="Enter Govt ID"
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
              onChange={handleChange}
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
        <Button variant="danger" type="reset" className="mb-4 mt-4">
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
