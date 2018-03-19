import React from "react";
import { Link } from "react-router-dom";
import {StyledItem} from './style';

const NavItem = ({name,path,isHome}) => {
    return (
        <StyledItem isHome={isHome}>
             <Link to={`/${path}`}>{name}</Link>
        </StyledItem>
    )
}

export default NavItem;