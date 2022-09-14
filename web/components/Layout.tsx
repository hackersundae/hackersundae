import Head from "next/head";
import { styled } from "../stitches.config";

import Nav from "../components/Nav";

const Box = styled("div", {});

const Container = styled("div", {
  marginX: "auto",
  paddingX: "$3",

  variants: {
    size: {
      1: {
        maxWidth: "545px",
      },
      2: {
        maxWidth: "856px",
      },
      3: {
        maxWidth: "1240px",
      },
    },
  },
});

export default function Layout({ children, description }) {
  return (
    <>
      <Box css={{ paddingY: "$1" }}>
        <Head>
          <title>Hacker Sundae</title>
          <meta name="description" content={description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container size={{ "@initial": "1", "@bp1": "2" }}>
          <Nav />
          {children}
        </Container>
      </Box>
    </>
  );
}
