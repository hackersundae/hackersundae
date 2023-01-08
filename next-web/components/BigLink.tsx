// stitches
import { keyframes } from "@stitches/react";
import { styled } from "../stitches.config";
// types
import { BigLinkProps } from "../types";

const glowing = keyframes({
  "0%": { backgroundPosition: "0 0" },
  "50%": { backgroundPosition: "400% 0" },
  "100%": { backgroundPosition: "0 0" },
});

const Link = styled("a", {
  fontSize: "$4",
  color: "$loContrast",
  textDecoration: "none",
  border: "none",
  outline: "none",
  background: "#111",
  cursor: "pointer",
  position: "relative",
  zIndex: "0",
  padding: "$2",

  "&::after": {
    zIndex: "-1",
    content: "",
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "#111",
    left: "0",
    top: "0",
  },

  "&::before": {
    content: "",
    background:
      "linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)",
    position: "absolute",
    top: "-2px",
    left: "-2px",
    backgroundSize: "400%",
    zIndex: "-1",
    width: "calc(100% + 4px)",
    height: "calc(100% + 4px)",
    animation: `${glowing} 20s linear infinite`,
    transition: "opacity .3s ease-in-out",
  },
});

const SubText = styled("p", {
  fontSize: "$2",
  fontWeight: "300",
  margin: "$4 0 0 0",
});

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
