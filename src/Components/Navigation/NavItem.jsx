import React from "react";
import { Link, withRouter} from "react-router-dom";
import {StyledItem} from './style';

const NavItem = ({name,path}) => {
    return (
        <StyledItem>
             <Link to={`/${path}`}>{name}</Link>
        </StyledItem>
    )
}

export default NavItem;