import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  gap: 1rem;
  width: 27.5rem;
  height: 4rem;

  background: #b9b9bc;
  border-radius: 0.5rem;

  > input {
    width: 80%;
    height: 3rem;

    border: none;
    background: #b9b9bc;
    font-size: 1rem;
  }

  input:focus {
    outline: none;
    background: #b9b9bc;
  }

  @media (max-width: 768px) {
    width: 20rem;
  }
`
