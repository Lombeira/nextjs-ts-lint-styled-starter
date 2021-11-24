import Head from 'next/head'

import Next from '../assets/Nextjs-logo.svg'
import { Container } from '../styles/pages/Home'


const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Boilerplate</title>
      </Head>
      <Next />
        <h1>ReactJS Structure</h1>
        <p>A ReactJS + Next.js structure made by Lombeira.</p>
    </Container>
  )
}

export default Home
