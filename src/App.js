import { useState } from 'react';
import './App.css';
import Student from './Components/Student/Student';
import StudentContext from './Context/StudentContext';



function App() {

    // modal manage
    const [modal, setModal] = useState(false);

    const handleModalShow = () => setModal(true);
    const handleModalHide = () => setModal(false);
  

  // Geting data 
  const [student, setStudent] = useState({
    name : '',
    email : '',
    photo : ''
  });

  const handleFormData = (e) => {
    setStudent({
      ...student,
      [e.target.name] : e.target.value
    });
  }

  // submit form
const handleFormSubmit = () => {
  if(student.name == '' || student.email == ''){
    
  }
}



  return (
    <>

      <StudentContext.Provider value={[ modal, handleModalShow, handleModalHide, student, handleFormData, handleFormSubmit ]}> 
        <Student></Student>
      </StudentContext.Provider>
      
    </>
  );
}

export default App;
