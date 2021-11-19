import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${(props) => props.width || 30}px;
  height: ${(props) => props.height || 80}px;
`;
