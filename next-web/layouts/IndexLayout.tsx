import Head from "next/head";
import { styled } from "../stitches.config";
import { LayoutProps } from "../types";

const Box = styled("div", {});

const Container = styled("div", {
  fontSize: "$4",
  color: "$loContrast",
  transition: "300ms",
  margin: "0 auto",
  variants: {
    size: {
      1: {
        maxWidth: "440px",
      },
      2: {
        maxWidth: "540px",
      },
    },
  },
});

const Layout: React.FC<LayoutProps> = ({ children, description }) => (
  <Box>
    <Head>
      <title>Hacker Sundae</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={description} />
      <meta name="twitter:description" content={description} />
    </Head>
    <Container size={{ "@initial": "2" }}>{children}</Container>
  </Box>
);

export default Layout;
