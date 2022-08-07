import React, { FC } from 'react';
import styled from '@emotion/styled';
import commonStyles from '@components/sponsors/sponsor-section.module.css';
import { DOSSIER, EVENT_NAME } from '@lib/constants';
import { ButtonSecondary } from '@components/buttons/buttonSecondary';
import { ButtonTertiary } from '@components/buttons/buttonTertiary';
import { SocialNetworks } from '@components/social-networks/social-networks';
import { HeaderLogoWithName } from '@components/headerLogoWithName/HeaderLogoWithName';

const ButtonList = styled.li`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
      múltiples propósitos, tiene el de <strong>dar a conocer el talento tecnológico femenino</strong> que existe en las Islas
      Canarias.👩‍💻</p>
    <p className={commonStyles.description}>AdaLoversConf es un evento abierto a todo el público y, en él, podrás
      compartir conocimiento, hacer networking, e incluso venir con tu familia. Además, este año hemos apostado
      por hacerlo lo más eco friendly posible.🪴</p>
    <p className={commonStyles.description}>¿Te lo vas a perder?</p>
    <ButtonList>
      <ButtonSecondary text='¡Compra tu entrada!'
                       action={() => window.open('https://www.tomaticket.es/es-es/entradas-adaloversconf', '_blank')} />
      <ButtonTertiary text='Dossier' action={() => window.open(DOSSIER, '_blank')} />
    </ButtonList>
    <SocialNetworks twitter='https://twitter.com/adalovedev'
                    instagram='https://www.instagram.com/adalovedev/'
                    youtube='https://www.youtube.com/channel/UCiUgaJGlunCT7jwwbliAiPw/videos' />
  </Container>;
};
