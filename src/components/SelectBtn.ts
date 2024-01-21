import styled, { css } from "styled-components"

interface SelectBtnProps {
  isSelected: boolean
}

export const SelectBtn = styled.button<SelectBtnProps>`
  background: transparent;
  color: ${({ theme }) => theme.colors.dark[900]};
  font-weight: 600;
  border: none;

  ${({ theme, isSelected }) =>
    isSelected &&
    css`
      border-bottom: 2px solid ${theme.colors.dark[900]};
    `}
`
