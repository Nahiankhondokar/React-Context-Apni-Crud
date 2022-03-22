import React, { useContext } from 'react';
import { Container, Row, Col, Button, Table, Card } from 'react-bootstrap';
import StudentContext from '../../Context/StudentContext';
import StudentModal from './StudentModal/StudentModal';


const Student = () => {

  const [ modal, handleModalShow, handleModalHide ] = useContext(StudentContext);



  return (
    <>
    
    <Container>

      <StudentModal></StudentModal>

        <Row className='mt-5'>
          <Col md={10} className='m-auto'>
            <Card>
              <Card.Header className='d-flex justify-content-between'>
                <h4 className='text-center'>All Student </h4>
                <Button variant='info' onClick={ handleModalShow }>Add New Student</Button>
              </Card.Header>
              <Card.Body className='student-table shadow'>
                  <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Student</th>
                            <th>Email</th>
                            <th>Photo</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                              {/* <Button variant='info'> <FontAwesomeIcon icon={ faEye }></FontAwesomeIcon> </Button>&nbsp;

                              <Button  variant='warning'> <FontAwesomeIcon icon={ faEdit }></FontAwesomeIcon> </Button>&nbsp;

                              <Button variant='danger'> <FontAwesomeIcon icon={ faTrash }></FontAwesomeIcon> </Button> */}
                            </td>
                          </tr>
                      
                    

                    </tbody>
                </Table>
              </Card.Body>
              
              
            </Card>
          </Col>
        </Row>
      </Container>
    
    
    </>
  )
};

export default Student;