import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from './components/form/form';
import Table from './components/table/table'
import './App.css';

function App() {
  const [tableData, setTableData] = useState([]);

  function handleFormSubmit(formData){
    setTableData([...tableData, formData]);
  }
  return (
    <Container>
      <Row>
        <Col>
        <Form onSubmit={handleFormSubmit} />
        </Col>
      </Row>
      <Row>
        <Col>
        <Table data={tableData} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
