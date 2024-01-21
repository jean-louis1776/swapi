import styled from "styled-components"

export const Container = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;

    @media screen and (max-width: 480px) {
      flex-direction: column;
      justify-content: center;

      .select {
        margin-top: 1rem;
      }

      .pagination {
        margin-top: 1rem;
      }
    }

    .select {
      button + button {
        margin-left: 2rem;
      }
    }

    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;

      button + button {
        margin-left: 1rem;
      }
    }
  }

  .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;

    > div {
      margin: 1rem;
    }

    @media screen and (max-width: 480px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > div {
        margin: 1rem 0;
      }
    }
  }

  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    width: 100%;
    height: 500px;

    > span {
      font-size: 2rem;
    }
  }
`
