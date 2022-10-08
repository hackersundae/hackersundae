// next
import Head from "next/head";
// stitches
import { styled } from "../stitches.config";
// types
import { LayoutProps } from "../types";

const Box = styled("div", {});

const Container = styled("div", {
  padding: "100px",
  fontSize: "$2",
  color: "$loContrast",
  transition: "300ms",
  variants: {
    padding: {
      1: {
        padding: "80px 100px 100px 100px",
      },
      2: {
        padding: "50px",
      },
      3: {
        padding: "20px",
      }
    },
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
    <Container size={{ "@initial": "2" }} padding={{"@initial": "1", "@md": "2", "@sm": "3"}}>{children}</Container>
  </Box>
);

export default Layout;
