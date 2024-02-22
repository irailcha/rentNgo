import styled from '@emotion/styled';

export const ButtonStyle = styled.button`
  display: inline-block;
  width: 100%;
  border-radius: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  background-color: #3470ff;
  color: #ffffff;

  :hover {
    background-color: #0b44cd;
    cursor: pointer;
  }
`;

export const AdditionalStyle = styled.div`
  display: flex;
  justify-content: space-around;

  & :last-child {
    color: #3470ff;
    :hover {
      color: #0b44cd;
      text-decoration: underline;
    }
  }
`;
