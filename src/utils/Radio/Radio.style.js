import styled from 'styled-components';

export const Label = styled.label`
  ${props => props.theme.flex('center', 'center', 'row')}
`;

export const Text = styled.p`
  margin: 0.3rem 0 0.2rem 0.3rem;
`;

export const Radio = styled.input.attrs({
  type: 'radio',
})`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.5rem;
`;
