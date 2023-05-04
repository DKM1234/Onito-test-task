import React, { useState, useEffect } from 'react';  
import { Table, Spinner } from 'react-bootstrap';   
import { FaTrash } from 'react-icons/fa'; 
  
function MyTable() {  
  const [data, setData] = useState([]);  
  const [loading, setLoading] = useState(true);

  useEffect(() => {  
    fetch('https://95efqh7zh3.execute-api.ap-south-1.amazonaws.com/user')  
      .then(response => response.json())  
      .then(data => {
        setData(data); 
        setLoading(false);
      });  
  }, []);  
 
  const handleDelete = (id) => { 
    setLoading(true);
    setTimeout(() => { 
    fetch(`https://95efqh7zh3.execute-api.ap-south-1.amazonaws.com/user/${id}`, { 
      method: 'DELETE' 
    }) 
      .then(response => { 
        if (response.ok) { 
          setData(data.filter(item => item.id !== id)); 
        } else { 
          console.log('Failed to delete data'); 
        } 
        setLoading(false);
      }) 
      .catch(error => { 
        console.log(error); 
        setLoading(false);
      }); 
  }, 500);
}
  
  return (
    <>
      {loading && (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', marginTop: '25px' }}>
    <Spinner animation="border" style={{ color: '#a9f1a9' }} />
  </div>
)}
       {!loading && data.length === 0 && (
      <div style={{ textAlign: 'center', marginTop: '20px', color: '#a9f1a9' }}>
        <h3>No Data to Display .  Please Add Some Data .</h3>
        <img src="https://media.tenor.com/lvLaG5hPCncAAAAd/data-analysis.gif" style={{ borderRadius: '7%' }} alt='No Data Found' />
      </div>
    )}
    {!loading && data.length > 0 && (
        <Table striped bordered hover className='container mt-2' 
          style={{ textAlign: 'center'}} 
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
              <th>Action</th> 
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
                <td>{item.graduationDetails}</td>  
                <td>{item.address}</td>  
                <td>{item.city}</td>  
                <td>{item.state}</td>  
                <td>{item.country}</td>  
                <td>{item.pinCode}</td>  
                <td> 
                  <FaTrash style={{ color: 'red'}} onClick={() => handleDelete(item.id)}></FaTrash> 
                </td> 
              </tr>  
            ))}  
          </tbody>  
        </Table>  
      )}
    </>
  );  
}  
  
export default MyTable;