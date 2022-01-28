import styled from 'styled-components';

export const Label = styled.label`
  ${props => props.theme.flex('center', 'flex-start', 'row')}
`;

export const Text = styled.p`
  margin: 0.3rem 0 0.2rem 0.3rem;
`;

export const Input = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.5rem;
`;
