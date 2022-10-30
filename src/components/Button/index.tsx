import { ButtonBase } from "./styles";

interface ButtonProps {
  title: string;
  variant?: string;
  onClick?: () => {};
};

export const Button = ({title, variant='primary', onClick}: ButtonProps) => {
  return (
    <ButtonBase
      variant={variant}
      onClick={onClick}
    >
      {title}
    </ButtonBase>
  )
}