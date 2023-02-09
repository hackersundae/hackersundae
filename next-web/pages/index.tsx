import { useEffect } from "react";
import Image from "next/image";
import { globalCss, styled } from "../stitches.config";

import logo from "../public/logo.png";
import Layout from "../layouts/IndexLayout";
import Title from "../components/TitleSection";
import Body from "../components/BodySection";
import BigLink from "../components/BigLink";

import { HomeProps } from "../types";

const globalStyles = globalCss({
  body: {
    fontFamily: "$hacker",
    margin: "0",
    background:
      "conic-gradient(from -51.43deg at 22.33% 110.5%, #2300F9 -101.77deg, #09042C 129.5deg, #19072A 146.25deg, #2300F9 258.23deg, #09042C 489.5deg)",
    minHeight: "100vh",
  },
});

const Wrapper = styled("div", {
  padding: "3rem 1rem",
});

const Page: React.FC<HomeProps> = () => {
  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <Layout description="A collective of hackers who host a weekly hack-a-thon on Sundays">
      <Wrapper>
        <Image src={logo} width={35} alt="Hacker Sundae logo" priority />
        <Title
          title="Welcome to, Hacker Sundae"
          subtitle="Remote hackathon every Sunday"
          split={2}
        />
        <Body title="About">
          <div>
            <p>
              Founded in 2016, we are a collective of hackers who host a weekly
              hack-a-thon on Sundays. We band together to explore our ideas and
              hack them into existence. We are developers, artists, students,
              and friends. Hacker Sunday is supposed to be a sustainable
              hack-a-thon experience,unlike your typical 24hr hack-a-thon.
            </p>
            <p>
              There&apos;s no specific topic except you can&apos;t hack on
              &apos;work&apos; projects. Hacker Sunday is a place where you can
              explore freely with the support of your peers. We want to set
              aside Sundays for you to try things out and genuinely do cool
              shit. Not do more work for your corporate overlords.
            </p>
          </div>
        </Body>
        <BigLink
          url="https://discord.gg/hp36nWgcG4"
          linkTitle="Become A Hacker And Join Us"
          subtitle="Join our Discord Server and add the Hacker Sunday Role"
        />
      </Wrapper>
    </Layout>
  );
};

export default Page;
