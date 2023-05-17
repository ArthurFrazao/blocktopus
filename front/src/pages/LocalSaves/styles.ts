import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
  }
`

export const AddNewLocal = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.5rem;

  border: none;
  background: none;

  :hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`
