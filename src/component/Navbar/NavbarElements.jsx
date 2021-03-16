import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { FaTimes, FaSearch } from 'react-icons/fa'

export const Nav = styled.nav`
background: white;
height:75px;
/* margin-top: -80px; */
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
top: 0;
width:100%;
position: fixed;
z-index: 999;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display: flex;
/* justify-content: space-between; */
height: 75px;
position: relative;
z-index: 999;
width:100%;
padding: 0px;
max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #e5989b;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    font-family:viga;
    display:flex;
    align-items:center;
    font-weight:bold;
    text-decoration:none !important;

@media screen and (max-width: 767px) {
    display:none;
}

&:hover {
    color:#e5989b;
}
`

export const NavLogoMobile = styled(LinkR)`
color: #e5989b;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
font-family:viga;
display:none;
align-items:center;
font-weight:bold;
text-decoration:none !important;

@media screen and (max-width: 767px) {
    display:flex;
}

&:hover {
    color:#e5989b;
}
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 767px) {
    display:block;
    color: #e5989b;     
    position:absolute;
    top:0;
    right:0;
    margin-top:-10px;
    margin-right:-25px;
    transform: translate(-100%, 60%);
    font-size:1.8rem;
    cursor:pointer;
    display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
}
`

export const CloseIcon = styled(FaTimes)`
    color: #e5989b;
    margin-top:-16px;
    margin-right:-25px;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size:2rem;
    cursor:pointer;
    outline:none;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

    @media screen and (min-width: 768px) {
    display:none;
}`

export const NavMenu = styled.ul`
display: flex;
align-items:center;
list-style:none;
text-align:center;
margin-top:16px;
position:absolute;
margin-top:-2px;
right: 0;

@media screen and (max-width: 767px) {
    display:none;
}
`

export const NavItem = styled.li`
height: 80px;
cursor:pointer;
`

export const NavLinks = styled(LinkS)`
color: #444053;
font-weight:medium;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
display:flex;
align-items:center;
text-decoration:none !important;
padding:0 1rem;
height:100%;
transition: 0.2s ease-in-out;

&:hover {
        color:black;
        margin-top:-2px;
        transition: 0.2s ease-in-out;
        border-bottom: 2px solid black;
    }

&.active {
    color:black;
        margin-top:-2px;
        border-bottom: 2px solid black;
}
`
export const SearchTxt = styled.input`
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: #444053;
    font-size: 1rem;
    transition: 0.4s;
    width:200px;
    border-bottom: 1.7px solid #adb5bd;

    @media screen and (max-width: 768px) {
        width:0px;
    }
    /* font-weight: bold; */
    
`

export const IconSearch = styled(FaSearch)`
    color: #444053;
`

export const SearchBtn = styled.a`
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    color: white;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        margin-right:0px;
    }
`

export const SearchBox = styled.div`
    align-items:center;
    background: white;
    border-radius: 40px;
    display:flex;
    position: absolute;
    right: 0;
    margin-top:20px;

    @media screen and (max-width: 768px) {
            right:60px;
            display:flex;
            &:hover > ${SearchTxt} {
            width: 150px;
            padding: 2px 6px;
            margin-right:20px;
            border-bottom: 1.7px solid #adb5bd;
        }
    }

    

    /* &:hover > ${SearchBtn} {
    background:white;
    } */
`

// export const SearchResult = styled.div`
//     align-items:center;
//     background: white;
//     width: 200px;
//     height: auto;
//     position: absolute;
//     right: 0px;
//     margin-top:50px;
//     margin-right:40px;
//     @media screen and (max-width: 768px) {
//         display:none;
//     }
// `

// export const TitleResult = styled.h4`
//     color:black;
//     margin:0;
//     padding:10px;
// `

// export const DescResult = styled.h4`
//     color:black;
//     margin-top:-15px;
//     padding:10px;
//     font-weight:lighter;
// `