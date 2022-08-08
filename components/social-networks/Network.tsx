import { FC } from 'react';
import { Icon } from '@components/icon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styled from '@emotion/styled';

interface NetworkProps {
  network: string;
  url: string;
  icon: IconProp;
}

const Link = styled.a`
  :hover svg {
    color: var(--tertiaray-color);
  }
`;

export const Network: FC<NetworkProps> = ({ network, url, icon }) =>
  <Link href={url} title={network} target='_blank'>
    <Icon icon={icon} />
  </Link>;
