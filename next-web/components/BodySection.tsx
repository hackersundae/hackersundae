// stitches
import { styled } from "../stitches.config";

interface BodyProps {
  title: string;
  children: JSX.Element;
}

const Heading = styled("h1", {
  fontSize: "$6",
  fontWeight: "black",
});

const BodyWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "$4 0 $6 0",
  gap: "$1",
  fontSize: "$3",
  "& *": {
    margin: "0",
  },
  "& p": {
    margin: "0 0 $2 0",
  },
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
