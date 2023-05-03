import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function MyTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://95efqh7zh3.execute-api.ap-south-1.amazonaws.com/user')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <Table striped bordered hover
    className='container mt-2'
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>D.O.B.</th>
          <th>Sex</th>
          <th>Email</th>
          <th>Mobile No.</th>
          <th>Govt.ID</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Country</th>
          <th>Pincode</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.dateOfBirthOrAge}</td>
            <td>{item.sex}</td>
            <td>{item.email}</td>
            <td>{item.mobileNumber}</td>
            <td>{item.governmentId}</td>
            <td>{item.address}</td>
            <td>{item.city}</td>
            <td>{item.state}</td>
            <td>{item.country}</td>
            <td>{item.pinCode}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default MyTable;