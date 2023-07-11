'use client'
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.dark_grey};
`;

const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LogoText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

const Menu = styled.ul`
    display: flex;
    gap: 20px;
`;

const MenuItem = styled.li`
    list-style-type: none;
`;

const Header: React.FC = () => {
    return(
        <HeaderWrapper>
            <LogoWrapper>
                <LogoText>
                    <img src="/images/Logo1.svg" alt="sbaloans" />
                    <img src="/images/Logo2.svg" alt="HQ"/>
                </LogoText>
                <img src="/images/Slogan.svg" alt="a better way to sba" />
            </LogoWrapper>
            <div></div>
            <Menu>
                <MenuItem>Deal Management</MenuItem>
                <MenuItem>Deal Bundles</MenuItem>
                <MenuItem>User Management</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </HeaderWrapper>
    );
};

export default Header;