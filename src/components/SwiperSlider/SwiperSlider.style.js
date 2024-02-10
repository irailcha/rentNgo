import styled from '@emotion/styled';

export const SwiperThumb = styled.div`
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

export const ImageStyle = styled.img`
  height: 268px;
  object-fit: cover;
  object-position: center;
`;
