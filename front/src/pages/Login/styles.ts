import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;

  height: 100vh;
  width: 100vw;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const BackgroundImage = styled.div`
  width: 50vw;
  height: 100vh;

  background-image: url('https://images6.alphacoders.com/108/1082090.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    margin-bottom: 0.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    margin-top: 9.375rem;
  }

  form > button {
    align-self: flex-end;
  }
`

export const BtnLogin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 1.125rem;
`
