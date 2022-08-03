export const SITE_URL = 'https://adaloversconf.es';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'adalovedev';
export const YEAR = '2022';
export const SITE_NAME_MULTILINE = ['AdaLoversConf', 'Conf'];
export const SITE_NAME = 'AdaLoversConf';
export const EVENT_NAME = SITE_NAME + '22';
export const META_DESCRIPTION =
  'Web del evento con toda la información del mismo. Aquí puedes ver horarios, charlas y conocer a las ponentes con las que contaremos.';
export const SITE_DESCRIPTION =
  EVENT_NAME + ' evento online, visibilizando a mujeres del sector de desarrollo de software.';
export const DATE = `Septiembre 24, ${YEAR}`;
export const SHORT_DATE = 'Sep 24 - 8:00am UTC+1';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';
export const CALL_FOR_PAPER = 'https://forms.gle/pgTtB4k5wPdLDHVw6';
export const DOSSIER = '/ES_Dossier_AdaLoversConf_2022.pdf';

export const CODE_OF_CONDUCT =
  '';
export const REPO = 'https://github.com/adalover/2021-adaloversconf';
export const URL_STREAM = 'https://www.youtube.com/embed/Hs6spuMeWiY';

export const SOCIAL_NET_LINKS = {
  twitter: 'https://twitter.com/adalovedev',
  instagram: 'https://www.instagram.com/adalovedev/',
  youtube: 'https://www.youtube.com/channel/UCiUgaJGlunCT7jwwbliAiPw/videos'
}

export const NAVIGATION = [
  {
    name: 'El evento',
    route: '/collaboration', //TODO Change to event
    hide: false
  },
  {
    name: 'Colaboradores',
    route: '/expo',
    hide: false
  },
  {
    name: 'Ponentes',
    route: '/speakers',
    hide: false
  },
  {
    name: 'Horarios',
    route: '/schedule',
    hide: true
  },
  {
    name: 'En directo',
    route: '/stage/charlas',
    hide: true
  }
];

export const SAMPLE_TICKET_NUMBER = 1234;
// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;


export type TicketGenerationState = 'default' | 'loading';
