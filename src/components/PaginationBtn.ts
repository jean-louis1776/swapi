import styled, { css } from "styled-components"
import { transparentize } from "polished"

interface PaginationBtnProps {
  isActive?: boolean
}

export const PaginationBtn = styled.button<PaginationBtnProps>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    transparentize(0.8, theme.colors.dark[900])};
  color: ${({ theme }) => theme.colors.dark[900]};
  font-weight: bold;

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.dark[900]};
    cursor: not-allowed;
  }
  svg {
    text-align: center;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.dark[900]};
      color: ${({ theme }) => theme.colors.light[900]};
    `}
`

PaginationBtn.defaultProps = {
  isActive: false,
}
