import styled from "styled-components";

export const Wrapper = styled.div`

display:flex;
justify-content:space-between;
flex-direction:column;
width:100%;
boder:1px solid lightblue;
border-radius:20px;


button {
    border-radius:0 0 20px 20px;
    
}

img {
    max-height:250px;
    max-width:250px;
    object-fit:cover;
    border-radius:14px;
    
}

div {
    font-family:arial;
    padding:1rem;
    height:100%;
}
`