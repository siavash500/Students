import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Student from './Student.js';
import StudentsList from './ListOfStudents/StudentsList.js';
import './Style.css';

export default function App() {
  const [Studentss, setStudentss] = useState([
    { id: 0, name: 'mahdi',lastname : 'aghzadeh' ,classNumer: 15, phone: 1234, email: 'react@gmail.com' },
    { id: 1, name: 'rahman',lastname : 'aghzadeh' ,classNumer: 13, phone: 1234, email: 'react@gmail.com' },
    { id: 2, name: 'Bob',lastname : 'aghzadeh' ,classNumer: 11, phone: 1234, email: 'react@gmail.com' },
    { id: 3, name: 'ELi',lastname : 'aghzadeh' ,classNumer: 12, phone: 1234, email: 'react@gmail.com' },
    { id: 4, name: 'Sia',lastname : 'aghzadeh' ,classNumer: 10, phone: 1234, email: 'react@gmail.com' },

  ]);
  
  

  // تابع افزودن دانش‌آموز
  const addStudent = (student) => {
    setStudentss([...Studentss, { ...student, id: Studentss.length }]);
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">فرم ثبت‌نام</Link> |{" "}
          <Link to="/students">لیست دانش‌آموزان</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Student addStudent={addStudent} />} />
          <Route path="/students" element={<StudentsList students={Studentss} setstudetnss  = {setStudentss}/>} />
        </Routes>
      </div>
    </Router>
  );
}





