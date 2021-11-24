import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 3.4rem;
    color: ${props => props.theme.colors.primary};
    margin-top: 2.5rem;
  }

  p {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`
