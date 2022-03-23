import React, { useContext } from 'react';
import { Button, Form, CloseButton, Modal, Row, Col, Card } from 'react-bootstrap';
import StudentContext from '../../../Context/StudentContext';



const StudentEditModal = () => {

    const [addModal, editModal, viewModal, handleAddModalShow, handleAddModalHide, student, handleFormData, handleFormSubmit, allStudent, handleStudentView, singleStu, handleStudentDelete, handleStudentEdit, handleViewModalHide, handleEditModalHide, editStu, handleInputUpdate, handleFormUpdate ] = useContext(StudentContext);


  return (
    <>
            <Modal show={ editModal } onHide={ handleEditModalHide }>
                <Modal.Header>
                    <h3 className="text-center"> Edit Student</h3>
                    <CloseButton onClick={ handleEditModalHide }></CloseButton>
                </Modal.Header>
                <Modal.Body>
                    <Form method='POST' onSubmit={ handleFormUpdate }>
            
                        <Form.Group>
                            <Form.Label>Student</Form.Label>
                            <Form.Control name='name' value={editStu.name} onChange={ (e) => handleInputUpdate(e) }></Form.Control>
                        </Form.Group>
    
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control name='email' value={editStu.email} onChange={ (e) => handleInputUpdate(e) }></Form.Control>
                        </Form.Group>
    
                        <Form.Label className='d-block'>Gender</Form.Label>
                        <Form.Group value={ editStu.gender } onChange={ (e) => handleInputUpdate(e) } className='d-flex gap-2'>

                            <input value="male" name="gender" id='male' type="radio" /><label htmlFor="male"> Male</label>
      
                            <input  value="female" name="gender" id='female' type="radio" /><label htmlFor="female"> Female</label>
                        </Form.Group>
        
                        <Button type='submit' variant='info' className='mt-3 text-center'>Update</Button>
        
                    </Form>
                </Modal.Body>
            </Modal>
        </>
  )
};

export default StudentEditModal;