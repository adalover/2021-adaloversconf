import styled from '@emotion/styled';

interface Props {
  text: string,
  action: () => void,
}

const TertiaryButton = styled.button`
  border-radius: var(--space-2x);
  border: 1px solid var(--white);
  color: var(--secondary-color);
  background: var(--tertiary-color-alpha);
  cursor: pointer;
  font-family: inherit;
  font-size: var(--text-md);
  letter-spacing: -0.02em;
  font-weight: 500;
  outline: none;
  transition: background-color 0.2s ease;
  padding: var(--space-6x);
  height: 55px;
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: var(--white);
    color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
}
`

export const ButtonTertiary = ({ text, action }: Props) =>
  <TertiaryButton onClick={action}>
    {text}
  </TertiaryButton> 