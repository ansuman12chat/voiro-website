import React from 'react'
import Vlogo from '../../images/Voiro_Logo.png'
import { FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    WebsiteRights


} from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to ="/reqademo">How it works</FooterLink>
                            <FooterLink to ="/reqademo">Testimonials</FooterLink>
                            <FooterLink to ="/reqademo">Careers</FooterLink>
                            <FooterLink to ="/reqademo">Investors</FooterLink>
                            <FooterLink to ="/reqademo">Terms and Service</FooterLink>   
                        </FooterLinkItems>
                        
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to ="/reqademo">How it works</FooterLink>
                            <FooterLink to ="/reqademo">Testimonials</FooterLink>
                            <FooterLink to ="/reqademo">Careers</FooterLink>
                            <FooterLink to ="/reqademo">Investors</FooterLink>
                            <FooterLink to ="/reqademo">Terms and Service</FooterLink>   
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to ="/reqademo">How it works</FooterLink>
                            <FooterLink to ="/reqademo">Testimonials</FooterLink>
                            <FooterLink to ="/reqademo">Careers</FooterLink>
                            <FooterLink to ="/reqademo">Investors</FooterLink>
                            <FooterLink to ="/reqademo">Terms and Service</FooterLink>   
                        </FooterLinkItems>
                        
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to ="/reqademo">How it works</FooterLink>
                            <FooterLink to ="/reqademo">Testimonials</FooterLink>
                            <FooterLink to ="/reqademo">Careers</FooterLink>
                            <FooterLink to ="/reqademo">Investors</FooterLink>
                            <FooterLink to ="/reqademo">Terms and Service</FooterLink>   
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo src={Vlogo} onClick={toggleHome} to='/' alt="Voiro"/>
                            
                        
                        <WebsiteRights>Voiro ©{new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target='_blank' aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                            <SocialIconLink href="/" target='_blank' aria-label="Twitter"><FaTwitter /></SocialIconLink>
                            <SocialIconLink href="/" target='_blank' aria-label="Youtube"><FaYoutube /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
