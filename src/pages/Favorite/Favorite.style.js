import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const MessageStyle = styled.p`
  text-align: center;
  padding: 70px 0;
  font-size: 20px;
`;

export const LinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;

  &:hover {
    color: #0b44cd;
  }
`;
