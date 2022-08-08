import { FC } from 'react';
import styles from '@components/footer/footer.module.css';

interface LinkProps {
  scr: string;
  name: string;
}

export const FooterLink: FC<LinkProps> = ({ scr, name }) => <p className={styles['footer-paragraph']}>
  <a
    href={scr}
    className={styles['footer-link']}
    target='_blank'
    rel='noopener noreferrer'
  >
    {name}
  </a>
</p>;
