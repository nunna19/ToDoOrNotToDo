import React from "react";
import styled from 'styled-components';


const Title = styled.h5`
  font-size: 1.5em;
  color: palevioletred;
`;

export const Header = (props) => (
  <div className="row">
    <div className="col-md-8">
     <Title><h5>To do</h5></Title> 
    </div>
    <div className="col-md-4">
       {props.children}
    </div>
  </div>
);
