import React, { useContext } from 'react';
import { Container, Row, Col, Button, Table, Card } from 'react-bootstrap';
import StudentContext from '../../Context/StudentContext';
import StudentModal from './StudentAddModal/StudentAddModal';


const Student = () => {

  const [addModal, editModal, viewModal, handleAddModalShow, handleAddModalHide, student, handleFormData, handleFormSubmit, allStudent, handleStudentView, singleStu, handleStudentDelete, handleStudentEdit, handleViewModalHide, handleEditModalHide ] = useContext(StudentContext);



  return (
    <>
    
    <Container>

      

        <Row className='mt-5'>
          <Col md={10} className='m-auto'>
            <Card>
              <Card.Header className='d-flex justify-content-between'>
                <h4 className='text-center'>All Student </h4>
                <Button variant='info' onClick={ handleAddModalShow }>Add New Student</Button>
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

                          {
                            allStudent.map((data, index) => 
                            
                              <tr>
                                <td>{ index + 1 }</td>
                                <td>{ data.name }</td>
                                <td>{ data.email }</td>
                                <td><img style={{ width : '40px' }} src="//www.pngitem.com/pimgs/m/4-49754_our-team-single-hd-png-download.png" alt="" /></td>
                                <td>
                                  <Button onClick={ () => handleStudentView(data.id) } variant='info' className='btn-sm'>View</Button>&nbsp;

                                  <Button onClick={ () => handleStudentEdit(data.id) }  variant='warning' className='btn-sm'>Edit</Button>&nbsp;

                                  <Button onClick={ () => handleStudentDelete(data.id) }  variant='danger' className='btn-sm'>Delete</Button>
                                </td>
                              </tr>

                            )
                          }
                      
                    

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