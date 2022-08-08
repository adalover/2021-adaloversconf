import { FC } from 'react';
import Link from 'next/link';
import styles from '@components/speakers/speaker-section.module.css';

interface BackLinkProps {
  text: string;
  url: string;
}

export const BackLink: FC<BackLinkProps> = ({ text, url }) => <Link href={url}>
  <a className={styles.backlink}>
    <svg
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
    >
      <path d='M15 18l-6-6 6-6' />
    </svg>
    {text}
  </a>
</Link>;
