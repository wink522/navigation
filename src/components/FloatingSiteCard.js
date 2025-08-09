import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import * as FaIcons from 'react-icons/fa';

// 创建随机漂浮动画
const createFloatAnimation = (x, y) => keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(${x * 0.5}px, ${y * 0.5}px) rotate(${x > 0 ? 2 : -2}deg); }
  50% { transform: translate(${x}px, ${y}px) rotate(${x > 0 ? 3 : -3}deg); }
  75% { transform: translate(${x * 0.5}px, ${y * 0.5}px) rotate(${x > 0 ? 1 : -1}deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`;

// 卡片容器
const CardContainer = styled.div`
  position: absolute;
  z-index: ${props => props.$isSearched ? 10 : 1};
  transition: all 0.5s ease;
  ${props => props.$isSearched && css`
    transform: scale(1.2) !important;
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3) !important;
    animation-play-state: paused !important;
    filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.5));
  `}
`;

// 搜索匹配时的高亮动画
const pulseAnimation = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(106, 142, 251, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(106, 142, 251, 0); }
  100% { box-shadow: 0 0 0 0 rgba(106, 142, 251, 0); }
`;

// 搜索匹配时的抖动动画
const shakeAnimation = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
  20%, 40%, 60%, 80% { transform: translateX(2px); }
`;

// 卡片样式
const Card = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 110px;
  padding: 1rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #333;
  animation: ${props => props.$floatAnimation && css`${props.$floatAnimation}`} ${props => props.$duration}s ease-in-out infinite;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.9);
  
  ${props => props.$isSearched && css`
    animation: ${pulseAnimation} 2s infinite, ${shakeAnimation} 0.5s ease-in-out;
    background: linear-gradient(135deg, #ffefba, #ffffff);
    border: 2px solid #ffd700;
    color: #000;
    font-weight: 600;
  `}
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08), 0 6px 6px rgba(0, 0, 0, 0.12);
    animation-play-state: paused;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  
  ${props => props.$isSearched && css`
    transform: scale(1.2);
    background: linear-gradient(135deg, #ffd700, #ff9500);
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.7);
  `}
`;

const SiteName = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
  
  ${props => props.$isSearched && css`
    font-weight: 700;
    color: #000;
    text-shadow: 0 0 2px rgba(255, 215, 0, 0.5);
  `}
`;

const FloatingSiteCard = ({ site, searchTerm }) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [floatAnimation, setFloatAnimation] = useState(null);
  const [duration, setDuration] = useState(0);
  
  // 检查是否被搜索到
  const isSearched = searchTerm && 
    site.name.toLowerCase().includes(searchTerm.toLowerCase());

  // 初始化随机位置和动画
  useEffect(() => {
    // 随机位置 (相对于容器的百分比)
    const randomX = Math.random() * 70 + 5; // 5% - 75%
    const randomY = Math.random() * 70 + 5; // 5% - 75%
    setPosition({ x: randomX, y: randomY });
    
    // 随机漂浮方向和速度
    const moveX = (Math.random() - 0.5) * 30;
    const moveY = (Math.random() - 0.5) * 30;
    const newAnimation = createFloatAnimation(moveX, moveY);
    setFloatAnimation(newAnimation);
    
    // 随机动画持续时间 (15-30秒)
    const newDuration = 15 + Math.random() * 15;
    setDuration(newDuration);
  }, []);
  
  // 搜索匹配状态变化时，重新触发抖动动画
  useEffect(() => {
    if (isSearched) {
      // 如果被搜索到，先移除动画类，然后重新添加，以重新触发动画
      const card = cardRef.current;
      if (card) {
        card.style.animation = 'none';
        setTimeout(() => {
          card.style.animation = '';
        }, 10);
      }
    }
  }, [isSearched]);

  // 动态获取图标组件
  const getIcon = (iconName) => {
    const Icon = FaIcons[iconName];
    return Icon ? <Icon /> : <FaIcons.FaLink />;
  };

  return (
    <CardContainer 
      ref={cardRef}
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
      $isSearched={isSearched}
    >
      <Card 
        href={site.url} 
        target="_blank" 
        rel="noopener noreferrer"
        $floatAnimation={floatAnimation}
        $duration={duration}
        $isSearched={isSearched}
      >
        <IconWrapper $isSearched={isSearched}>
          {getIcon(site.icon)}
        </IconWrapper>
        <SiteName $isSearched={isSearched}>{site.name}</SiteName>
      </Card>
    </CardContainer>
  );
};

export default FloatingSiteCard;