import buttonStyles from './buttonPrimary.module.css';

interface Props {
  text: string,
  action: () => void,
}

export const ButtonPrimary = ({ text, action }: Props) => <button
  onClick={action}
  className={buttonStyles.button}>
  {text}
</button> 