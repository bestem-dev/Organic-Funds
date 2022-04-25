import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#16DF7E' : '#1FFF89')
};
white-space: nowrap;
padding: ${({big}) => (big ? '24px 48px' : '22px 30px')};
color: ${({dark}) => (dark ? '#272F3C': '#ffffff')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline:none;
border:none;
cursor: pointer;
display:flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => ( primary ? '#fff':'#16DF7E')
};
}

`
