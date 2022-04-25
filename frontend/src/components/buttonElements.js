import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
    border-radius: 50px;
    
};
white-space: nowrap;
padding: ${({big}) => (big ? '24px 48px' : '22px 30px')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline:none;
border:none;
cursor: pointer;
display:flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
z-index:0;
margin-top: -245px;
margin-right:280px;
border: white 1px solid;
color: white;

&:hover{
    transition: all 0.2s ease-in-out;
   
};
   
}

`