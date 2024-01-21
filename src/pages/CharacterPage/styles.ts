import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;

  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
`

export const CharacterContainer = styled.div`
  .character-data {
    width: 100%;

    &-details {
      background-color: ${({ theme }) => theme.colors.dark[900]};
      color: ${({ theme }) => theme.colors.light[900]};
      padding: 3rem;
      width: 100%;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .right-data {
        width: 50%;
        text-align: center;
      }

      h1 {
        font-weight: 500;
        font-size: 2rem;
        margin-bottom: 2rem;
        display: inline-block;
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary.main};
      }

      p {
        font-size: 1.25rem;
        span {
          color: ${({ theme }) => theme.colors.primary.main};
        }
      }

      img {
        width: 400px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .character-data {
      margin-right: 0;

      &-details {
        flex-direction: column;

        .right-data {
          width: 100%;
        }

        img {
          width: 100%;
        }
      }
    }
  }
`
