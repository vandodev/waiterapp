import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  left: 0;
  top: 0;
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

