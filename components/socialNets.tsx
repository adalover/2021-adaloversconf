import { SOCIAL_NET_LINKS } from '@lib/constants';
import styled from '@emotion/styled';
import { Icon } from './icon';
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const SocialNetsStyle = styled.li`
  height: 100%;
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

export const SocialNets = () =>
  <SocialNetsStyle>
    <Link href={SOCIAL_NET_LINKS.twitter} title='Twitter' target='_blank'>
      <Icon icon={faTwitter} />
    </Link>
    <Link href={SOCIAL_NET_LINKS.instagram} title='Instagram' target='_blank'>
      <Icon icon={faInstagram} />
    </Link>
    <Link href={SOCIAL_NET_LINKS.youtube} title='Youtube' target='_blank'>
      <Icon icon={faYoutube} />
    </Link>
  </SocialNetsStyle>