import { StyledButton } from '@/styles/StyledButton';
import { ButtonProps } from '@/types';

export function ButtonComponent({
  children,
  onClick,
  color,
  size,
  background,
}: ButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      color={color}
      fontSize={size}
      padding={size}
      size={size}
      background={background}
    >
      {children}
    </StyledButton>
  );
}
