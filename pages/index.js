import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

const Card = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: white;
  color: #999;
  padding: 1.4rem;
  margin: 0 100px;
  transition: background .3s ease, color .6s ease .1s;

  &:hover {
    color: white;
    background: #222;
  }
  `

export default function Home() {
  return (
    <div>
      <Head>
        <title>tinaDEVZ</title>
        <meta name="description" content="Trying out tinaCMS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Card>KEINE/WERBUNG<span>menu</span></Card>

    </div>
  )
}
