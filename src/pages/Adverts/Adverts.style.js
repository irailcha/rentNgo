import styled from '@emotion/styled';

export const ButtonStyle = styled.button`
  display: inline-block;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  background-color: transparent;
  color: #3470ff;
  margin: auto 0;

  :hover {
    color: #0b44cd;
  }
`;

export const ButtonUpPage = styled.button`
  position: absolute;
  display: block;
  border: solid 1px #3470ff;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  right: 0;
  bottom: 0;
  background-color: transparent;
  float: right;
  margin: 10px;
  width: 40px;
  height: 40px;

  :hover {
    background-color: #3470ff;
  }
`;
