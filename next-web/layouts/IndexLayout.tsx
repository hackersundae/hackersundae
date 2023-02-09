import Head from "next/head";
import { styled } from "../stitches.config";
import { LayoutProps } from "../types";

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
  <>
    <Head>
      <title>Hacker Sundae</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={description} />
      <meta name="twitter:description" content={description} />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#2300F9"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#09042C"
      />
    </Head>
    <Container size={{ "@initial": "2" }}>{children}</Container>
  </>
);

export default Layout;
