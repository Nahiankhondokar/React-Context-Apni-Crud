import React, { useContext } from 'react';
import { Button, Form, CloseButton, Modal, Row, Col, Card } from 'react-bootstrap';
import StudentContext from '../../../Context/StudentContext';



const StudentModal = () => {

    const [ modal,  handleModalShow, handleModalHide, student, handleFormData, handleFormSubmit ] = useContext(StudentContext);

  return (
    <>
    <Modal show={ modal } onHide={ handleModalHide }>
            <Modal.Header>
                <h3 className="text-center"> Add New Student</h3>
                <CloseButton onClick={ handleModalHide }></CloseButton>
            </Modal.Header>
            <Modal.Body>
                <Form method='POST' onSubmit={ handleFormSubmit }>
        
                    <Form.Group>
                        <Form.Label>Student</Form.Label>
                        <Form.Control name='name' value={student.name} onChange={ (e) => handleFormData(e) }></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name='email' value={student.email} onChange={ (e) => handleFormData(e) }></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Photo</Form.Label>
                        <Form.Control name='photo' value={student.photo} onChange={ (e) => handleFormData(e) }></Form.Control>
                    </Form.Group>
    
                    <Button type='submit' variant='info' className='mt-3 text-center'>Submit</Button>
    
                </Form>
            </Modal.Body>
        </Modal>
    </>
  )
};

export default StudentModal;