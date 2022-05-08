import styled from "styled-components";

export const CartItemWrapper = styled.div`

display:flex;
flex-direction:column;
font-family:arial,helvetica,sans-serif;
padding-buttom:20px;
border-bottom:1px solid lightblue;


div {
    flex:1;
}

.buttons {

display:flex;
justify-content:flex-start;
font-size:2em;
max-width:50px;
max-height:25px;




}

img {
    max-width:80px;
    object-fit:cover;
    margin-left:40px;
}
`