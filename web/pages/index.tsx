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
    height: "100vh",
    overflow: "hidden",
  },
});

const FooterWrapper = styled("div", {
  position: "absolute",
  bottom: "0",
  zIndex: "-1"
});

const CosmeticFooterWrapper = styled("div", {
  position: "relative",
  bottom: "0",
});

const CosmeticFooter = styled("svg", {
  position: "absolute",
  width: "190vw",
  left: "0",
  bottom: "0",
});

// const ImgLayout = styled("div", {
//   position: "absolute",
//   left: "-10px",
//   bottom: "-10px",
//   height: "150px",
//   width: "250px"
// })

const DripFooter = () => (
  <FooterWrapper>
    <CosmeticFooterWrapper>
      <CosmeticFooter
        viewBox="0 0 1349 154"
        fill="cover"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 31L212.277 53.9012C231.286 55.952 250.506 54.7429 269.108 50.3259L303.819 42.084C334.33 34.8395 366.259 36.2791 395.994 46.2399L476.561 73.2289C524.312 89.2248 576.72 82.9565 619.351 56.1504L674.654 21.3769C720.557 -7.4866 779.079 -6.92038 824.416 22.826V22.826C857.541 44.5608 898.387 51.0747 936.63 40.7216L1013.17 20.0017C1042.19 12.1448 1072.79 12.2207 1101.77 20.2218L1194.2 45.7375C1220.98 53.1303 1249.18 53.7665 1276.26 47.5889L1349 31V154H0V31Z"
          fill="#9D3DE9"
          fillOpacity="0.36"
        />
      </CosmeticFooter>
    </CosmeticFooterWrapper>
  </FooterWrapper>
);

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
      <DripFooter />
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
