import buttonStyles from './buttonPrimary.module.css';

interface Props {
    text: string,
    link: string,
    isNewPage?: boolean,
}

export const ButtonLinkPrimary = ({ text, link, isNewPage = false }: Props) =>
    <a href={link} target={isNewPage ? '_blank' : ''}>
        <button className={buttonStyles.button}>
            {text}
        </button>
    </a>