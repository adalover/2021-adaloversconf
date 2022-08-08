import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styled from '@emotion/styled';

interface Props {
  icon: IconProp,
  color?: string,
  size?: number,
}

export const Icon = ({ icon, color = 'var(--secondary-color)', size = 32 }: Props) => {
  const IconStyle = styled.svg`
    width: ${size}px;
    height: ${size}px;
  `

  return (
    <IconStyle>
      <FontAwesomeIcon icon={icon} color={color} />
    </IconStyle>)
}