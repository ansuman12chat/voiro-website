import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SideBtnWrap, SidebarLink, SidebarRoute, SidebarMenu } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen ={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        ABOUT US
                    </SidebarLink>
                    <SidebarLink to="product" onClick={toggle}>
                        PRODUCT
                    </SidebarLink>
                    <SidebarLink to="career" onClick={toggle}>
                        CAREERS
                    </SidebarLink>
                    <SidebarLink to="service" onClick={toggle}>
                        SERVICES
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        CONTACT US
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/reqademo'>REQUEST A DEMO</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar
