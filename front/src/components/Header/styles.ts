import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1440px;
  padding: 2.875rem 2.5rem;

  border-bottom: 1px solid #f5f5f7;

  img {
    cursor: pointer;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    list-style: none;
  }

  li:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`
