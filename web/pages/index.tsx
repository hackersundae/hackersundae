// react
import { useEffect } from "react";
// next
import { GetStaticProps, GetStaticPaths, GetStaticPropsResult } from "next";
// next/image
import Image from "next/image";
// stitches
import { globalCss, styled } from "../stitches.config";
// components
import Layout from "../components/IndexLayout";
import Title from "../components/TitleSection";
import Body from "../components/BodySection";
import BigLink from "../components/BigLink";
// utils
import data from "../utils/data/default.json";
// types
import { HomeProps, TitleProps, BigLinkProps } from "../types";

// content_layer
// import { allPages, type Page } from "contentlayer/generated";
// import { useMDXComponent } from "next-contentlayer/hooks";
// date
// import { compareDesc, format, parseISO } from "date-fns";

const globalStyles = globalCss({
  body: {
    background:
      "conic-gradient(from -51.43deg at 22.33% 110.5%, #2300F9 -101.77deg, #09042C 129.5deg, #19072A 146.25deg, #2300F9 258.23deg, #09042C 489.5deg)",
    fontFamily: "$hacker",
    margin: "0",
    minHeight: "100vh",
  },
});

const CosmeticFooter = styled("div", {
  position: "absolute",
  width: "100vw",
  height: "100px",
  background: "#9D3DE9",
  opacity: ".40",
  bottom: "0",
})

// const ImgLayout = styled("div", {
//   position: "absolute",
//   left: "-10px",
//   bottom: "-10px",
//   height: "150px",
//   width: "250px"
// })

const Page: React.FC<HomeProps> = () => {
  useEffect(() => {
    globalStyles();
  }, []);

  return (
      <>
      <Layout description="A collective of hackers who host a weekly hack-a-thon on Sundays">
        <>
          <Title
            title="Welcome to, Hacker Sundae"
            subtitle="Remote hackathon every Sunday"
            split={2}
          />
          <Body title="About">
            <div>
              <p>
                Founded in 2016, we are a collective of hackers who host a
                weeklyhack-a-thon on Sundays. We band together to explore our
                ideas and hackthem into existence. We are developers, artists,
                students, and friends. Hacker Sunday is supposed to be a
                sustainable hack-a-thon experience,unlike your typical 24hr
                hack-a-thon.
              </p>
              <p>
                There's no specific topic except you can't hack on 'work'
                projects. Hacker Sunday is a place where you can explore freely
                with the supportof your peers. We want to set aside Sundays for
                you to try things outand genuinely do cool shit. Not do more
                work for your corporateoverlords.
              </p>
            </div>
          </Body>
          <BigLink
            url="https://discord.gg/NCYacgkyZF"
            linkTitle="Become A Hacker And Join Us"
            subtitle="Join our Discord Server and add the Hacker Sunday Role"
          />
        </>
      </Layout>
      <CosmeticFooter />
      </>
  );
};

// type Slug = {
//   slug: string[];
// };

// interface BodyProps {
//   title: string;
//   children: string;
// }

// interface PageData {
//   titleProps: TitleProps;
//   bodyProps: BodyProps;
//   linkProps: BigLinkProps;
// }

// export const getStaticProps: GetStaticProps<PageData, Slug> = (
//   context
// ): GetStaticPropsResult<PageData> => {
//   // to order mdx content by date -->
//   // const pages = allPages.sort((a, b) => {
//   //   return compareDesc(new Date(a.date), new Date(b.date));
//   // });
//   // iterate over allPages to get blogs/posts/docs

//   let pageData;

//   const slug = context.params?.slug?.join("/") || "default";
//   if (Object.keys(data).indexOf(slug) >= 0) {
//     pageData = data[slug as keyof typeof data];
//     return {
//       props: { ...pageData },
//     };
//   } else {
//     return {
//       notFound: true,
//     };
//   }
// };

// for dynamic pages
// export const getStaticPaths: GetStaticPaths = () => {
//   return {
//     fallback: "blocking",
//     paths: [],
//   };
// };

export default Page;
