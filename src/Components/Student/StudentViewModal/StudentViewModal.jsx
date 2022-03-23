import React, { useContext } from 'react';
import { Button, Form, CloseButton, Modal, Row, Col, Card } from 'react-bootstrap';
import StudentContext from '../../../Context/StudentContext';



const StudentViewModal = () => {

    // Context API
    const [addModal, editModal, viewModal, handleAddModalShow, handleAddModalHide, student, handleFormData, handleFormSubmit, allStudent, handleStudentView, singleStu, handleStudentDelete, handleStudentEdit, handleViewModalHide, handleEditModalHide ] = useContext(StudentContext);

  return (
    <>
            <Modal show={ viewModal } onHide={ handleViewModalHide }>
                <Modal.Header>
                    <h3 className="text-center"> Single Student</h3>
                    <CloseButton onClick={ handleViewModalHide }></CloseButton>
                </Modal.Header>
                <Card>
                <img className='shadow' style={{ width: '150px', borderRadius: '50%', margin: 'auto', display: 'block' }} src="//www.pngitem.com/pimgs/m/4-49754_our-team-single-hd-png-download.png" alt="" />
                    <h2 className='text-center'>{ singleStu.name }</h2>
                    <h4 className='text-center'>{ singleStu.email }</h4>
                    <h4 className='text-center'>{ singleStu.gender }</h4>
                </Card>
            </Modal>
        </>
  )
};

export default StudentViewModal;