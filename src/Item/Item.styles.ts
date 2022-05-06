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
    max-height:250pxpx;
    object-fit:cover;
    
}

div {
    font-family:arial;
    padding:1rem;
    height:100%;
}
`;