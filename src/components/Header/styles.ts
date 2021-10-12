import styled from 'styled-components';

export const Container = styled.div`
  height: 68px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};

  font-size: 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 32px;
`;