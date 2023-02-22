import styled from "styled-components";


export const Item = styled.li`
    width: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    background-color:${props => props.bgcColor};

`

export  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}