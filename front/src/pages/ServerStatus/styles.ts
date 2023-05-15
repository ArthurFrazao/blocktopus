import styled from 'styled-components'

const ColorStatus = {
  Online: '#3cbe3c',
  Offline: '#be3c3c'
} as const

export type StatusType = keyof typeof ColorStatus

interface StatusServerProps {
  status: StatusType
}

export const Container = styled.div<StatusServerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    margin-bottom: 3rem;
  }

  h3::after {
    content: '';
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${props => ColorStatus[props.status]};
  }
`
