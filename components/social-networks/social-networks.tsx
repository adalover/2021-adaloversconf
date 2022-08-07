import styled from '@emotion/styled';
import { faGithub, faInstagram, faLinkedin, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FC } from 'react';
import { Network } from '@components/social-networks/Network';
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons/faArrowPointer';

interface SocialNetworksProps {
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
  twitch?: string;
  github?: string;
  web?: string;
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
                                                          web
                                                        }) =>
  <Container>
    {twitter && <Network network='Twitter' url={twitter} icon={faTwitter} />}
    {linkedin && <Network network='Twitter' url={linkedin} icon={faLinkedin} />}
    {instagram && <Network network='Twitter' url={instagram} icon={faInstagram} />}
    {youtube && <Network network='Twitter' url={youtube} icon={faYoutube} />}
    {twitch && <Network network='Twitter' url={twitch} icon={faTwitch} />}
    {github && <Network network='Twitter' url={github} icon={faGithub} />}
    {web && <Network network='Twitter' url={web} icon={faArrowPointer} />}
  </Container>;
