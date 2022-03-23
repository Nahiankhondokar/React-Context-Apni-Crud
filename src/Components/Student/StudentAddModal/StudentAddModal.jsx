import React, { useContext } from 'react';
import { Button, Form, CloseButton, Modal, Row, Col, Card } from 'react-bootstrap';
import StudentContext from '../../../Context/StudentContext';



const StudentAddModal = () => {

    const [addModal, editModal, viewModal, handleAddModalShow, handleAddModalHide, student, handleFormData, handleFormSubmit, allStudent, handleStudentView, singleStu, handleStudentDelete, handleStudentEdit, handleViewModalHide, handleEditModalHide ] = useContext(StudentContext);
    

    // Modal Type
    return (
        <>
            <Modal show={ addModal } onHide={ handleAddModalHide }>
                <Modal.Header>
                    <h3 className="text-center"> Add New Student</h3>
                    <CloseButton onClick={ handleAddModalHide }></CloseButton>
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
    
                        <Form.Label className='d-block'>Gender</Form.Label>
                        <Form.Group value={ student.gender } onChange={ (e) => handleFormData(e) } className='d-flex gap-2'>
                            <input value="male" name="gender" id='male' type="radio" /><label htmlFor="male"> Male</label>
      
                            <input value="female" name="gender" id='female' type="radio" /><label htmlFor="female"> Female</label>
                        </Form.Group>
        
                        <Button type='submit' variant='info' className='mt-3 text-center'>Submit</Button>
        
                    </Form>
                </Modal.Body>
            </Modal>
        </>
      )
};

export default StudentAddModal;