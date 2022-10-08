// stitches
import { styled } from "../stitches.config";
// types
import { TitleProps } from "../types";

const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  "& *": {
    margin: "0",
  },
});

const Heading = styled("h1", {
  fontSize: "$10",
  lineHeight: "1",
});

const SubTitle = styled("p", {
  fontSize: "$3",
  fontWeight: "300",
});

const splitTitleHelper = (title: string, split: number): JSX.Element => {
  const firstHalfOfTitle = title.split(" ").slice(0, split).join(" ");
  const secondHalfOfTitle = title.split(" ").slice(split).join(" ");
  return (
    <>
      {firstHalfOfTitle}
      <br />
      {secondHalfOfTitle}
    </>
  );
};

const Title: React.FC<TitleProps> = ({ title, subtitle, split }) => {
  let splitTitle: JSX.Element | 0 = 0;
  if (split) {
    splitTitle = splitTitleHelper(title, split);
  }

  return (
    <Section>
      <Heading>{splitTitle || title}</Heading>
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
    </Section>
  );
};

export default Title;
