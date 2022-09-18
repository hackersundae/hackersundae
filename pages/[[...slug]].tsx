// react
import { useEffect } from "react";
// next
import { GetStaticProps, GetStaticPaths, GetStaticPropsResult } from "next";
import Image from "next/image";
// stitches
import { globalCss, styled } from "../stitches.config";
// components
import Layout from "../components/Layout";
import Title from "../components/TitleSection";
import Body from "../components/BodySection";
import BigLink from "../components/BigLink";
// utils
import data from "../utils/data/default.json";
// types
import { HomeProps, TitleProps, BigLinkProps } from "../types";

const globalStyles = globalCss({
  body: {
    backgroundColor: "$gray100",
    minHeight: "100vh",
    padding: "0",
    margin: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Page: React.FC<HomeProps> = ({ titleProps, bodyProps, linkProps }) => {
  useEffect(() => {
    globalStyles();
  }, []);

  const children = (
    <div dangerouslySetInnerHTML={{ __html: bodyProps.children }} />
  );

  const newbodyProps = { ...bodyProps, children };

  return (
      <Layout description="Hackathon Group">
        <>
          <Title {...titleProps} />
          <Body {...newbodyProps} />
          <BigLink {...linkProps} />
        </>
      </Layout>
  );
};

type Slug = {
  slug: string[];
};

interface BodyProps {
  title: string;
  children: string;
}

interface PageData {
  titleProps: TitleProps;
  bodyProps: BodyProps;
  linkProps: BigLinkProps;
}

export const getStaticProps: GetStaticProps<PageData, Slug> = (
  context
): GetStaticPropsResult<PageData> => {
  let pageData;
  // slice to handle gh pages
  const slug = context.params?.slug?.slice(1).join("/") || "default";
  if (Object.keys(data).indexOf(slug) >= 0) {
    pageData = data[slug as keyof typeof data];
    return {
      props: { ...pageData },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    fallback: "blocking",
    paths: [],
  };
};

export default Page;
