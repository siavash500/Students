import React from 'react';
import Student from './Student';
import { styled } from 'styled-components';

const Styled =  styled.div `
border : 5px solid red;
`
export default function Students () {
  return (
    <Styled>
      <div>
        <p>the students</p>
        <Student />
     
    </div>
    </Styled>
  )
}

