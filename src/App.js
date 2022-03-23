import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import './App.css';
import Student from './Components/Student/Student';
import StudentContext from './Context/StudentContext';
import axios from 'axios';
import StudentAddModal from './Components/Student/StudentAddModal/StudentAddModal';
import StudentViewModal from './Components/Student/StudentViewModal/StudentViewModal';
import StudentEditModal from './Components/Student/StudentEditModal/StudentEditModal';


function App() {

  // modal manage
  const [addModal, setAddModal]   = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const handleAddModalShow = () => setAddModal(true);
  const handleAddModalHide = () => setAddModal(false);

  const handleViewModalShow = () => setViewModal(true);
  const handleViewModalHide = () => setViewModal(false);

  const handleEditModalShow = () => setEditModal(true);
  const handleEditModalHide = () => setEditModal(false);


  // Update Id 
const [updateId, setUpdateId] = useState(0);

  // All Students data
  const [allStudent, setAllStudent] = useState([]);

  // Geting data 
  const [student, setStudent] = useState({
    name : '',
    email : '',
    gender : ''
  });

  const handleFormData = (e) => {
    setStudent({
      ...student,
      [e.target.name] : e.target.value
    });
  }

  // submit form & Data store
const handleFormSubmit = (e) => {
  e.preventDefault();

  if(student.name == '' || student.email == ''){
    swal('all feilds are required');
  }else{

    axios.post('http://localhost:8000/students', student)
    .then((res) => {

      setStudent({
        name : '',
        email : '',
        gender : ''
      });

      handleAddModalHide();
      axios.get('http://localhost:8000/students')
      .then(res => setAllStudent(res.data.reverse()));

    });
  
  }
}

// Student view
const [singleStu, setSingleStu] = useState('');
const handleStudentView = (id) => {

  handleViewModalShow();
  axios.get('http://localhost:8000/students/' + id)
  .then(res => setSingleStu(res.data));
  
}


// Student Delete
const handleStudentDelete = (id) => {

  swal({
    title: "Are you sure?",
    text: "Student Delete!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {

      axios.delete('http://localhost:8000/students/' + id)
      .then((res) => {
        
        axios.get('http://localhost:8000/students')
        .then(res => setAllStudent(res.data.reverse()));
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      });

    } else {
      swal("Your imaginary file is safe!");
    }
  });
  
}



// Student Edit
const [editStu, setEditStu] = useState('');
const handleStudentEdit = (id) => {

  axios.get('http://localhost:8000/students/' + id)
  .then(res => {
    
    setEditStu(res.data);

  });
  handleEditModalShow();
  setUpdateId(id);
  
}


// Student Input tag Update
let handleInputUpdate = (e) => {
  setEditStu({
    ...editStu,
    [e.target.name] : e.target.value
  });
}


// Student update
const [updateStu, setUpdateStu] = useState('');
const handleFormUpdate = (e) => {
  e.preventDefault();

  let id = updateId;

  axios.put('http://localhost:8000/students/' + id, editStu)
  .then(res => {
    
    axios.get('http://localhost:8000/students')
    .then(res => setAllStudent(res.data.reverse()));

  });
  handleEditModalHide();

  swal('Student Updated Successful');
  
}




// Get data
useEffect(() => {
  allStudents();
},[allStudent]);

async function allStudents(){

  await axios.get('http://localhost:8000/students')
  .then(res => setAllStudent(res.data.reverse()));

}



  return (
    <>

      <StudentContext.Provider value={[ addModal, editModal, viewModal, handleAddModalShow, handleAddModalHide, student, handleFormData, handleFormSubmit, allStudent, handleStudentView, singleStu, handleStudentDelete, handleStudentEdit, handleViewModalHide, handleEditModalHide, editStu, handleInputUpdate, handleFormUpdate ]}> 

        <Student></Student>
        <StudentAddModal></StudentAddModal>
        <StudentViewModal></StudentViewModal>
        <StudentEditModal></StudentEditModal>

      </StudentContext.Provider>
      
    </>
  );
}

export default App;
