import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledBackground = styled.div`
  display: flex;
  align-items: center;
  jusity-content: center;
  flex-direction: column;
  background: #e9ebee;
  height: 100%;
  font-size: 1.6rem;
`;

type Props<P> = PropsWithChildren<P>;

const Layout = ({ children }: Props<unknown>): JSX.Element => {
  return <StyledBackground>{children}</StyledBackground>;
};

export default Layout;
