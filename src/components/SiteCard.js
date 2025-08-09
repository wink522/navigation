import React from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';

const Card = styled.a`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  text-decoration: none;
  color: #333;
  aspect-ratio: 1 / 1;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08), 0 6px 6px rgba(0, 0, 0, 0.12);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const SiteName = styled.span`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;

const SiteCard = ({ site }) => {
  // 动态获取图标组件
  const getIcon = (iconName) => {
    const Icon = FaIcons[iconName];
    return Icon ? <Icon /> : <FaIcons.FaLink />;
  };

  return (
    <Card href={site.url} target="_blank" rel="noopener noreferrer">
      <IconWrapper>
        {getIcon(site.icon)}
      </IconWrapper>
      <SiteName>{site.name}</SiteName>
    </Card>
  );
};

export default SiteCard;