// react
import { useEffect } from "react";
// next
import { GetStaticProps, GetStaticPaths, GetStaticPropsResult } from "next";
// stitches
import { globalCss } from "../stitches.config";
// components
import Layout from "../components/Layout";
import Title from "../components/TitleSection";
import Body from "../components/BodySection";
import BigLink from "../components/BigLink";
// utils
import data from "../utils/data/default.json";
// types
import { HomeProps, TitleProps, BodyProps, BigLinkProps } from "../types";

const globalStyles = globalCss({
  body: { backgroundColor: "$gray100" },
});

const Home: React.FC<HomeProps> = ({ titleProps, bodyProps, linkProps }) => {
  useEffect(() => {
    globalStyles();
  }, []);

  const children = (
    <div dangerouslySetInnerHTML={{ __html: bodyProps.children }}></div>
  );

  bodyProps = { ...bodyProps, children };
  return (
    <Layout description="Hackathon Group">
      <>
        <Title {...titleProps} />
        <Body {...bodyProps} />
        <BigLink {...linkProps} />
      </>
    </Layout>
  );
};

type Slug = {
  slug: string[];
};

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
    pageData = data[slug];
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

export default Home;
