// next
import Head from "next/head";
// stitches
import { styled } from "../stitches.config";
// types
import { LayoutProps } from "../types";

const Box = styled("div", {});

const Container = styled("div", {
  height: "100%",
  paddingX: "$5",
  fontFamily: "$hacker",
  fontSize: "$2",
  color: "$hiContrast",
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

const Layout: React.FC<LayoutProps> = ({ children, description }) => (
  <Box css={{ paddingY: "$1" }}>
    <Head>
      <title>Hacker Sundae</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container size={{ "@initial": "3", "@bp1": "1" }}>{children}</Container>
  </Box>
);

export default Layout;
