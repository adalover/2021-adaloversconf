import styled from '@emotion/styled';
import { Icon } from '../icon';
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FC } from 'react';

const SocialNetsStyle = styled.li`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: flex-end;
  justify-content: center;
`;

const Link = styled.a`
  :hover svg {
    color: var(--tertiaray-color);
  }
`;

interface SocialNetworksProps {
  twitter: string;
  instagram: string;
  youtube: string;
}

export const SocialNetworks: FC<SocialNetworksProps> = ({ twitter, instagram, youtube }) =>
  <SocialNetsStyle>
    <Link href={twitter} title='Twitter' target='_blank'>
      <Icon icon={faTwitter} />
    </Link>
    <Link href={instagram} title='Instagram' target='_blank'>
      <Icon icon={faInstagram} />
    </Link>
    <Link href={youtube} title='Youtube' target='_blank'>
      <Icon icon={faYoutube} />
    </Link>
  </SocialNetsStyle>;
