import { SponsorLink } from '@lib/types';
import { FC } from 'react';
import { SocialNetworks } from '@components/social-networks/social-networks';

interface SponsorLinksProps {
  links: SponsorLink[];
}

const getSocialNetwork = (links: SponsorLink[], socialNetwork: string): SponsorLink => {
  const sponsorLink = links.find(link => link.text === socialNetwork);
  return sponsorLink || { text: '', url: '' };
};

export const SponsorSocialNetworks: FC<SponsorLinksProps> = ({ links }) => {
  const twitter = getSocialNetwork(links, 'Twitter');
  const linkedIn = getSocialNetwork(links, 'LinkedIn');
  const youTube = getSocialNetwork(links, 'YouTube');
  const instagram = getSocialNetwork(links, 'instagram');
  const twitch = getSocialNetwork(links, 'Twitch');
  const github = getSocialNetwork(links, 'GitHub');

  return <SocialNetworks twitter={twitter.url}
                         linkedin={linkedIn.url}
                         instagram={instagram.url}
                         youtube={youTube.url}
                         twitch={twitch.url}
                         github={github.url}
  />;
};
