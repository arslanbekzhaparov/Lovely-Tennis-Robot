import React, { RefObject } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 6px;
  background-color: transparent;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin: 25px;
  margin-left: 35px;
  margin-bottom: 40px;
`;

const Bar = styled.div`
  height: 4px;
  background-color: #C2F747;
  transition: width 0.3s ease;
`;

const Handle = styled.div`
  width: 6px;
  height: 6px;
  background-color: #C2F747;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  cursor: grab;
  transition: transform 0.3s ease;
  &:active {
    cursor: grabbing;
  }
`;

interface VolumeControlProps {
  value: number;
  onChange: (value: number) => void;
}

const VolumeControl = ({ value, onChange }: VolumeControlProps) => {
  const handleRef: RefObject<HTMLDivElement> = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);

  

  const handleDragStart = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);
  
  const handleDragEnd = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(false);
  }, []);
  
  const handleDragMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const barRect = e.currentTarget.getBoundingClientRect();
    const handleRect = handleRef.current!.getBoundingClientRect();
    const width = barRect.width - handleRect.width;
    const offsetX = e.clientX - barRect.left;
    const value = Math.max(0, Math.min(1, offsetX / width));
    onChange(value);
  }, [isDragging, onChange]);

  return (
    <Container onMouseMove={handleDragMove} onMouseUp={handleDragEnd}>
      <Bar style={{ width: `${value * 100}%` }} />
      <Handle
        ref={handleRef}
        style={{
          transform: `translateX(${value * 100 - 50}%)`,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
      />
    </Container>
  );
};

export default VolumeControl;