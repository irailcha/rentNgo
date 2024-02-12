import styled from '@emotion/styled';

export const CarCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 426px;
`;

export const CarBaseInfoStyle = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  color: rgba(18, 20, 23, 0.5);
`;

export const ContainerTitleStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #121417;
`;

export const TitleStyleSpan = styled.span`
  color: #3470ff;
`;

export const ImageStyle = styled.img`
  object-fit: cover;
  object-position: center;
  height: 268px;
  margin-bottom: 14px;
`;

export const Container = styled.div`
  position: relative;

  :after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 12px;
    background: linear-gradient(to bottom, rgba(18, 20, 23, 0.5), transparent);
    pointer-events: none;
  }
`;
