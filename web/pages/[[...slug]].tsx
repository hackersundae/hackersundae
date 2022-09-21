// react
import { useEffect } from "react";
// next
import { GetStaticProps, GetStaticPaths, GetStaticPropsResult } from "next";
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
    fontFamily: "$hacker",
    margin: "0"
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
    <Layout description="A collective of hackers who host a weekly hack-a-thon on Sundays">
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

  const slug = context.params?.slug?.join("/") || "default";
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
