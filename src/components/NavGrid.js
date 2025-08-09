import React from 'react';
import styled from 'styled-components';
import FloatingSiteCard from './FloatingSiteCard';

const FloatingContainer = styled.div`
  position: relative;
  height: 75vh;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  overflow: hidden;
  background-color: rgba(245, 247, 250, 0.5);
  border-radius: 20px;
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const EmptyState = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 3rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  z-index: 100;
  min-width: 300px;
`;

const EmptyStateText = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
`;

const NavGrid = ({ data, searchTerm }) => {
  // 如果搜索词为空，显示所有站点
  // 如果有搜索词，仍然渲染所有站点，但会在FloatingSiteCard中突出显示匹配的站点
  
  // 检查是否有匹配的站点
  const hasMatchingSites = searchTerm === '' || 
    data.some(site => site.name.toLowerCase().includes(searchTerm.toLowerCase()));
  
  if (!hasMatchingSites) {
    return (
      <FloatingContainer>
        <EmptyState>
          <EmptyStateText>没有找到匹配的网站</EmptyStateText>
        </EmptyState>
      </FloatingContainer>
    );
  }
  
  return (
    <FloatingContainer>
      {data.map((site, index) => (
        <FloatingSiteCard 
          key={index} 
          site={site} 
          searchTerm={searchTerm}
        />
      ))}
    </FloatingContainer>
  );
};

export default NavGrid;