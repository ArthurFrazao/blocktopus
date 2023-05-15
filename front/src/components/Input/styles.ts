import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`

export const CustomInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  gap: 1rem;
  width: 27.5rem;
  height: 4rem;

  background: #f5f5f7;
  border-radius: 0.5rem;

  > input {
    width: 80%;
    height: 3rem;

    border: none;
    background: #f5f5f7;
    font-size: 1rem;
  }

  input:focus {
    outline: none;
    background: #f5f5f7;
  }

  @media (max-width: 768px) {
    width: 20rem;
  }
`

export const HelperText = styled.div`
  font-size: 0.8rem;
  color: #d84141;
`
