import './Students.css' ;
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';


export default function Student({ addStudent }) {
  
  const schema = Yup.object().shape({
    name : Yup.string()
    .required('نام الزامی است') 
    ,
    lastname : Yup.string()
    .required('نام خانوادگی الزامی است')
    ,
    email : Yup.string()
    .required("ایمیل الزامی است")
    .email('ایمیل درست نیست')
    ,
    phone : Yup.string()
    .required("شماره تلفن الزامی است")
    
    // ,
  //   pass : Yup.string()
  //   .required('the pass is necessary')
  //   .min(8,'more than 8 character')
  //   .matches(/[a-z]+/)
  //   .matches(/[A-Z]+/)
  //   .matches(/\d+/)
  //   ,
  //   confirmPass : Yup.string()
  //   .required("the ConfirmPass is necessary")
  //   .oneOf([Yup.ref("pass")] , ' the pass is not the same ')
 })

  const {register , handleSubmit , formState : {errors}, reset} = useForm({
    resolver : yupResolver(schema)}
  );

  const [showDone, setShowDone] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const onSubmit = (data) => {
    addStudent(data);
    reset();
    setShowDone(true);
    setFadeIn(false);
  };

  // useEffect(() => {
  //   if (showDone) {
  //     // اجرای fade in
  //     setTimeout(() => setFadeIn(true), 300); // شروع FadeIn زودتر
  //     setTimeout(() => setShowDone(false), 3000); // زمان بیشتر برای FadeOut

  //   }
  // }, [showDone]);

  useEffect(() => {
    if (showDone) {
      const fadeInTimeout = setTimeout(() => setFadeIn(true), 100);
      const hideTimeout = setTimeout(() => {
        setFadeIn(false); // برای اینکه بتونه بعداً دوباره اجرا بشه
        setShowDone(false);
      }, 3000);
  
      return () => {
        clearTimeout(fadeInTimeout);
        clearTimeout(hideTimeout);
      };
    }
  }, [showDone]);
  
 

  return (
    <>
      {
        showDone && (
          <div className={`continermassage${fadeIn ? " show" : ""}`}>

            <p id='formdone' className={fadeIn ? 'fade-in' : ''}>
              !فرم ثبت شد</p>
              
          </div>
        )
      }
   
     <div className='students' >

        

<form onSubmit={handleSubmit(onSubmit)}>
 
 <label htmlFor="">نام</label>
 <input {...register("name")}/> 

   {errors.name && <p>{errors.name.message}</p>}

  <label htmlFor="">نام خانوادگی</label>
  <input {...register("lastname")}/>

 {errors.name && <p>{errors.lastname.message}</p>}

   <label htmlFor="">شماره تلفن همراه</label>
   <input {...register('phone')} className='ltr'/>

 {errors.phone && <p>{errors.phone.message}</p>}

  <label htmlFor="">ایمیل</label>
  <input {...register("email")}className='ltr'    />

   {errors.email && <p>{errors.email.message}</p>}
 <br />

 <button type="submit"  className='form-buttons'>  ثبت نام</button><br />
 

</form>
</div>
    </>
  )
}








