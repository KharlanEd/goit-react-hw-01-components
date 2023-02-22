import styled from "styled-components";

export const Isonline = styled.span`
width:10px;
  svg{
    width: 20px;
    color: ${props => {
    return props.isActive ? '#04d227': 'red'
    }}
   } 
`