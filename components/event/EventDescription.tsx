import React, { FC } from 'react';
import styled from '@emotion/styled';
import commonStyles from '@components/sponsors/sponsor-section.module.css';
import { DOSSIER, EVENT_NAME } from '@lib/constants';
import { ButtonSecondary } from '@components/buttons/buttonSecondary';
import { ButtonTertiary } from '@components/buttons/buttonTertiary';
import { SocialNetworks } from '@components/social-networks/social-networks';
import { HeaderLogoWithName } from '@components/headerLogoWithName/HeaderLogoWithName';

const ButtonList = styled.li`
  margin: 3rem 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SecondaryButtonList = styled.li`
  margin: 1rem 0 3rem 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  width: 100%;
`;

export const EventDescription: FC = () => {
  return <Container>
    <HeaderLogoWithName src='/soloLogo.png' name='AdaLoversConf 22' alt={EVENT_NAME} />
    <p className={commonStyles.description}>¡Volvemos a vernos en presencial! 🙌</p>
    <p className={commonStyles.description}>La comunidad AdaLoveDev organizamos este evento cada año con el
      objetivo de visibilizar a la mujer en el sector tecnológico. Nuestra comunidad de desarrolladoras, entre sus
      múltiples propósitos, tiene el de <strong>dar a conocer el talento tecnológico femenino</strong> que existe en las
      Islas
      Canarias.👩‍💻</p>
    <p className={commonStyles.description}>AdaLoversConf es un evento abierto a todo el público y, en él, podrás
      compartir conocimiento, hacer networking, e incluso venir con tu familia. Además, este año hemos apostado
      por hacerlo lo más eco friendly posible.🪴</p>
    <p className={commonStyles.description}>¿Te lo vas a perder?</p>
    <ButtonList>
      <ButtonSecondary text='¡Compra tu entrada!'
        action={() => window.open('https://www.tomaticket.es/es-es/entradas-adaloversconf', '_blank')} />
      <ButtonTertiary text='Pide tu factura' action={() => window.open('https://forms.gle/cKeSCwEsxyZpGo4j7', '_blank')} />
    </ButtonList>
    <SecondaryButtonList>
      <ButtonTertiary text='Dossier' action={() => window.open(DOSSIER, '_blank')} />
      <ButtonTertiary text='Información de la zona'
        action={() => window.open('https://adalovedev.notion.site/Informaci-n-para-asistentes-AdaLoversConf22-359aa7387ec6415dbbeb7f6ca897ac87', '_blank')} />
      <ButtonTertiary text='FAQs'
        action={() => window.open('https://adalovedev.notion.site/f13bb51deb8c4513b5e70d79ac7eae3e?v=c37caa38bbc24b4689298d7ae4c989ec', '_blank')} />
    </SecondaryButtonList>
    <SocialNetworks twitter='https://twitter.com/adalovedev'
      instagram='https://www.instagram.com/adalovedev/'
      youtube='https://www.youtube.com/channel/UCiUgaJGlunCT7jwwbliAiPw/videos' />
  </Container>;
};
