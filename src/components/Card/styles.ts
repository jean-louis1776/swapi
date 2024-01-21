import styled from "styled-components"

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.dark[900]};
  width: 15rem;
  position: relative;
  transition: all 0.3s ease-in;
  z-index: 2;
  padding: 1rem;

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    border: none;
    background: transparent;
    z-index: 9;

    svg {
      color: ${({ theme }) => theme.colors.warning.main};
    }

    &:hover {
      svg {
        color: ${({ theme }) => theme.colors.warning.light};
      }
    }
  }

  img {
    width: 100%;
  }

  .card-name {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      background-color: ${({ theme }) => theme.colors.light[900]};
      color: ${({ theme }) => theme.colors.dark[900]};
      font-weight: 600;
      text-transform: uppercase;
      height: 3rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease-in;

      &:hover {
        background-color: ${({ theme }) => theme.colors.light[500]};
      }
    }
  }
`
