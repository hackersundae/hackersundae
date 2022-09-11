import Head from 'next/head'
import HSLogo from '../components/HSLogo'
import { styled } from '../stitches.config'

const Box = styled('div', {})

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',
})

const Link = styled('a', {
  fontFamily: '$system',
  textDecoration: 'none',
  color: '$purple600',
})

const Container = styled('div', {
  marginX: 'auto',
  paddingX: '$3',

  variants: {
    size: {
      1: {
        maxWidth: '300px',
      },
      2: {
        maxWidth: '585px',
      },
      3: {
        maxWidth: '865px',
      },
    },
  },
})

export default function Home() {
  return (
    <Box css={{ paddingY: '$6' }}>
      <Head>
        <title>hackersundae</title>
        <meta name="description" content="Hackathon group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container size={{ '@initial': '1', '@bp1': '2' }}>
        <Text as="h1">hackersundae</Text>
        <Text>
          Founded in 2016, we are a collective of hackers who host a weekly
          hack-a-thon on Sundays. We band together to explore our ideas and hack
          them into existence. We are developers, artists, students, and
          friends. Hacker Sunday is supposed to be a sustainable hack-a-thon
          experience, unlike your typical 24hr hack-a-thon.
        </Text>
        <Text>
          There's no specific topic except you can't hack on “work” projects.
          Hacker Sunday is a place where you can explore freely with the support
          of your peers. We want to set aside Sundays for you to try things out
          and genuinely do cool shit. Not do more work for your corporate
          overlords.
        </Text>
        <Text>
          <Link href="" target="_blank" rel="noopener noreferrer">
            Join the discord
          </Link>
        </Text>
      </Container>      
    </Box>
  )
}
