import React from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08), 0 6px 6px rgba(0, 0, 0, 0.12);
  }
`;

const CardHeader = styled.div`
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  padding: 1rem;
  font-weight: 600;
  font-size: 1.2rem;
  text-align: center;
`;

const CardBody = styled.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const SiteList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const SiteItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  flex-shrink: 0;
`;

const SiteName = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

const NavCard = ({ category, sites }) => {
  // 动态获取图标组件
  const getIcon = (iconName) => {
    const Icon = FaIcons[iconName];
    return Icon ? <Icon /> : <FaIcons.FaLink />;
  };

  return (
    <Card>
      <CardHeader>{category}</CardHeader>
      <CardBody>
        <SiteList>
          {sites.map((site, index) => (
            <SiteItem key={index} href={site.url} target="_blank" rel="noopener noreferrer">
              <IconWrapper>
                {getIcon(site.icon)}
              </IconWrapper>
              <SiteName>{site.name}</SiteName>
            </SiteItem>
          ))}
        </SiteList>
      </CardBody>
    </Card>
  );
};

export default NavCard;