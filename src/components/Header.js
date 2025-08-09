import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  padding: 1.5rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 0.5rem 1rem;
  width: 100%;
  max-width: 400px;
  transition: all 0.3s ease;
  
  &:focus-within {
    background-color: white;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: ${props => props.$focused ? '#333' : 'white'};
  flex-grow: 1;
  font-size: 1rem;
  outline: none;
  padding: 0.5rem;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
  
  &:focus {
    &::placeholder {
      color: #999;
    }
  }
`;

const SearchIcon = styled.div`
  color: ${props => props.$focused ? '#6e8efb' : 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = ({ searchTerm, setSearchTerm }) => {
  const [focused, setFocused] = React.useState(false);
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <Title>个人导航</Title>
        <SearchBar>
          <SearchInput 
            type="text" 
            placeholder="搜索网站..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            $focused={focused}
          />
          <SearchIcon $focused={focused}>
            <FaSearch />
          </SearchIcon>
        </SearchBar>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;