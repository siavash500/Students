import { useState } from "react";
import "./ListStyle.css";

export default function StudentsList({ students , setstudetnss }) {

    const handeldelete = () => {
        setstudetnss([])
    }

    const [searchItem , setSearchItem] = useState('');

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchItem.toLowerCase()),
        
      );
     

      
    return (
       <>
            <div className='nav' >

                <input 
                    className="input-nav"
                    type="text"
                    placeholder=". . . جستجو بر اساس نام"
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                    style={{textAlign:'right'}}
                />
             
                        { searchItem  &&  (

                        <ul style={{ border: '1px solid #ccc', padding: '8px' }}>

                            {filteredStudents.map(student => (
                            <li key={student.id}>{student.name}</li>
                             ))}
                        </ul>
                        )}
                    

            </div>
         
            <div className='continer'>
               
            <h2>لیست دانش‌آموزان</h2>
            {students.length === 0 ? (
                <p>هیچ دانش‌آموزی ثبت نشده است.</p>
            ) : (
                <div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', direction: 'rtl' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #ccc', padding: '8px' }}>نام</th>
                            <th style={{ border: '1px solid #ccc', padding: '8px' }}>نام خانوادگی</th>
                            <th style={{ border: '1px solid #ccc', padding: '8px' }}>شماره تلفن</th>
                            <th style={{ border: '1px solid #ccc', padding: '8px' }}>ایمیل</th>

                        </tr>
                    </thead>
                    <tbody>
                        {students.map((item, idx) => (
                            <tr key={idx}>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.name}
                                    <p className="noneP" >نام :</p>
                                </td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.lastname}
                                    <p className="noneP">نام خانوادگی : </p>
                                </td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.phone}
                                    <p className="noneP">شماره تلفن :</p>
                                </td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.email}
                                    <p className="noneP">ایمیل :</p>
                                </td>
                               
                            </tr>
                        ))}
                    </tbody>


                </table>
                
                    <button onClick={handeldelete} className="buttonedelete">حذف همه</button>

                </div>

            )}
             
            </div>
       </>
    );
}


