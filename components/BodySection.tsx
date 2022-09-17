// stitches
import { styled } from "../stitches.config";
// types
import { BodyProps } from "../types";

const Heading = styled("h1", {
  fontSize: "$7",
  fontWeight: "400"
});

const BodyWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "$4 0 $6 0",
  gap: "$1",
  "& *": {
    margin: "0",
  },
  "& p": {
    margin: "0 0 $2 0",
  }
});

const Body: React.FC<BodyProps> = ({ title, children }) => {
  return (
    <BodyWrapper>
      <Heading>{title}</Heading>
      <>{children}</>
    </BodyWrapper>
  );
};

export default Body;
