import styled from '@emotion/styled';
import { faFacebook, faGithub, faInstagram, faLinkedin, faMedium, faTelegram, faTiktok, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FC } from 'react';
import { Network } from '@components/social-networks/Network';
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons';

interface SocialNetworksProps {
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
  twitch?: string;
  github?: string;
  web?: string;
  medium?: string;
  facebook?: string;
  telegram?: string;
  tiktok?: string;
}

const Container = styled.li`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: flex-end;
  justify-content: center;
`;

export const SocialNetworks: FC<SocialNetworksProps> = ({
  twitter,
  linkedin,
  instagram,
  youtube,
  twitch,
  github,
  web,
  medium,
  facebook,
  telegram,
  tiktok
}) =>
  <Container>
    {twitter && <Network network='Twitter' url={twitter} icon={faTwitter} />}
    {linkedin && <Network network='Linkedin' url={linkedin} icon={faLinkedin} />}
    {instagram && <Network network='Instagram' url={instagram} icon={faInstagram} />}
    {youtube && <Network network='Youtube' url={youtube} icon={faYoutube} />}
    {twitch && <Network network='Twitch' url={twitch} icon={faTwitch} />}
    {github && <Network network='Github' url={github} icon={faGithub} />}
    {web && <Network network='Web' url={web} icon={faArrowPointer} />}
    {medium && <Network network='Medium' url={medium} icon={faMedium} />}
    {facebook && <Network network='Facebook' url={facebook} icon={faFacebook} />}
    {telegram && <Network network='Telegram' url={telegram} icon={faTelegram} />}
    {tiktok && <Network network='TikTok' url={tiktok} icon={faTiktok} />}
  </Container>;
