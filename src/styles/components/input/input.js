import styled from 'styled-components/native';
import { metrics, colors } from '~/styles/global';

export const InputContainer = styled.TextInput`
  align-self: center;

  padding: 19px 20px;
  font-size: 16px;
  width: 100%;
  border-radius: ${metrics.baseRadius}px;
  margin-top: 10px;
  background-color: ${colors.gray};

  color: ${colors.grayMedium};
  font-size: 14px;
`;
