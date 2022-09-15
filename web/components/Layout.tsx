import Head from "next/head";
import { styled } from "../stitches.config";

interface LayoutProps {
  children: JSX.Element;
  description: string;
}

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
