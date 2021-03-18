import styled from 'styled-components'
import { AiFillLinkedin, AiOutlineWhatsApp, AiFillGithub } from "react-icons/ai";

export const HeroSection = styled.div`

    /* background-color: ${({ isDark }) => (isDark ? 'red' : '#dddddd')}; */
/* background-image: radial-gradient(#373738, #17181d); */
display:flex;
justify-content:center;
padding:150px 0 200px 0;
height:auto;
width:100%;
        transition: 0.2s;
    background-image: radial-gradient(#fff, #edecec);

${({ isDark }) => isDark && `
    background-image: radial-gradient(#373738, #17181d);
transition: 0.2s ease-in-out;
`}
`

export const HeroTitle = styled.div`
font-family:montserrat;
font-weight:800;
    color: ${({ isDark }) => (isDark ? '#dddddd' : '#17181d')};
cursor: pointer;
margin:0;
font-size:5rem;
    @media screen and (max-width: 768px) {
        font-size:4rem;
    }

    @media screen and (max-width: 576px) {
        font-size:3rem;
    }

    @media screen and (max-width: 354px) {
        font-size:2rem;
    }


`

export const HeroSubTitle = styled.div`
font-family:montserrat;
    color: ${({ isDark }) => (isDark ? '#dddddd' : '#17181d')};
cursor: pointer;
text-align:justify;
text-align:center;
width:47.9%;
margin:-50px auto;
font-size:1rem;
@media screen and (max-width: 1200px) {
        width:59%;
    }
    @media screen and (max-width: 992px) {
        width:79%;
    }
    @media screen and (max-width: 768px) {
        width:90%;
    }

    @media screen and (max-width: 576px) {
        width:65%;
    }

    @media screen and (max-width: 354px) {
        width:70%;
    }
`

export const Social = styled.a`
    color: ${({ isDark }) => (isDark ? '#dddddd' : '#17181d')};
    font-size:2rem;
    cursor:pointer;
    margin: 30px 10px 0px 0px;
    text-decoration:none;
    outline:none;
    &:hover {
        transform: scale(1.5);
        transition: 0.2s;
        color: ${({ isDark }) => (isDark ? '#dddddd' : '#17181d')};
    }
`
export const WhatsApp = styled(AiOutlineWhatsApp)`
    color: ${({ isDark }) => (isDark ? '#dddddd' : '#17181d')};
    font-size:2rem;
    cursor:pointer;
    margin: 50px 10px 0px 0px;
    &:hover {
        transform: scale(1.5);
        transition: 0.2s;
    }
    `

export const Github = styled(AiFillGithub)`
    color: ${({ isDark }) => (isDark ? '#dddddd' : '#17181d')};
font-size: 2rem;
cursor: pointer;
    margin: 50px 10px 0px 0px;
    &:hover {
    transform: scale(1.5);
    transition: 0.2s;
}
`