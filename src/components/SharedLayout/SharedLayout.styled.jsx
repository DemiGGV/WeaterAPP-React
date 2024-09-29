import styled from 'styled-components';

export const MainLayoutContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: var(--mobile-2);

  border-radius: var(--radius);
  backdrop-filter: blur(50px);
  background-color: var(--main-background-color);

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 640px) {
    max-width: var(--tablet-1);
  }
  @media screen and (min-width: 768px) {
    max-width: var(--tablet-2);
  }
  @media screen and (min-width: 886px) {
    max-width: var(--desktop-1);
  }
  @media screen and (min-width: 1024px) {
    max-width: var(--desktop-2);
  }
`;
