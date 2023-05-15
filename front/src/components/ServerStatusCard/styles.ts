import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: fit-content;

  img {
    width: 15.3125rem;
    height: auto;
  }

  .has_problem {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;
  }

  svg {
    transition: 0.2s;
  }

  svg:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }

  button {
    padding: 0.5rem 3rem;
  }
`
