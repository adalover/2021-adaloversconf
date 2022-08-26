import React, { FC } from 'react';
import cn from 'classnames';
import styles from '@components/sponsors/sponsor-section.module.css';
import styleUtils from '@components/utils.module.css';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  max-height: 450px;
  height: 450px;
`;

interface ImageSectionProps {
  title: string;
  url: string;
}

export const ImageSection: FC<ImageSectionProps> = ({ title, url }) => {
  return <Container>
    <img alt={title} src={url}/>
    {/*<iframe*/}
    {/*  className={cn(styles.video, styleUtils.appear, styleUtils['appear-first'])}*/}
    {/*  allow='picture-in-picture'*/}
    {/*  allowFullScreen*/}
    {/*  frameBorder='0'*/}
    {/*  height='100%'*/}
    {/*  src={src}*/}
    {/*  title={title}*/}
    {/*  width='100%'*/}
    {/*/>*/}
  </Container>;
};
