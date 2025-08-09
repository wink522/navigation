import React from 'react';
import styled from 'styled-components';
import NavCard from './NavCard';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 1.5rem;
  }
`;

const EmptyState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const EmptyStateText = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
`;

const NavGrid = ({ data, searchTerm }) => {
  // 过滤数据
  const filteredData = data.map(category => {
    const filteredSites = category.sites.filter(site => 
      site.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return {
      ...category,
      sites: filteredSites
    };
  }).filter(category => category.sites.length > 0);
  
  if (filteredData.length === 0) {
    return (
      <GridContainer>
        <EmptyState>
          <EmptyStateText>没有找到匹配的网站</EmptyStateText>
        </EmptyState>
      </GridContainer>
    );
  }
  
  return (
    <GridContainer>
      {filteredData.map((category, index) => (
        <NavCard 
          key={index}
          category={category.category}
          sites={category.sites}
        />
      ))}
    </GridContainer>
  );
};

export default NavGrid;