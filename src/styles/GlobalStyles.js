import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
    background-color: #f5f7fa;
    color: #333;
    line-height: 1.6;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* 自定义滚动条 */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

export default GlobalStyles;