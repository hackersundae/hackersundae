// stitches
import { styled } from "../stitches.config";
// types
import { BigLinkProps } from "../types";

const Link = styled("a", {
  fontSize: "$3",
  color: "$purple500",
  textDecoration: "none",
});

const SubText = styled("p", {
  color: "$gray600",
  fontSize: "$1",
  fontWeight: "300",
  margin: "$1 0 0 0"
})

const BigLink: React.FC<BigLinkProps> = ({ url, linkTitle, subtitle }) => {
  return (
    <>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        {linkTitle}
      </Link>
      {subtitle && <SubText>{subtitle}</SubText>}
    </>
  );
};

export default BigLink;
