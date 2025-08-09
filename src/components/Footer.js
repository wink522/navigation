import React from 'react';
import styled from 'styled-components';
import { FaHeart, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 1.5rem;
  text-align: center;
  margin-top: auto;
  border-top: 1px solid #eaeaea;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Copyright = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HeartIcon = styled(FaHeart)`
  color: #ff6b6b;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const SocialLink = styled.a`
  color: #666;
  font-size: 1.2rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: #6e8efb;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          © {currentYear} 个人导航 | 用 <HeartIcon /> 制作
        </Copyright>
        <SocialLinks>
          <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;