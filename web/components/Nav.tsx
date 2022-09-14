import { styled } from "../stitches.config";

const NavLink = styled("a", {
  textDecoration: "none",
  fontFamily: "$system",
  fontSize: "$2",
  color: "$loContrast",
});

const FlexRowContainer = styled("div", {
  display: "flex",
  alignItems: "center",
});

const Nav = styled("nav", {
  display: "flex",
  backgroundColor: "#5E5184",
  padding: ".25rem .25rem",
  color: "white",
  justifyContent: "space-between",
  alignItems: "center",
});

export default function NavComponent() {
  return (
    <Nav>
      <FlexRowContainer css={{ gap: "1.2rem" }}>
        <FlexRowContainer style={{ gap: ".3rem" }}>
          <img
            src="/logo.png"
            style={{ height: "20px", border: "solid 1px white" }}
          />
          <NavLink
            css={{ fontWeight: "700", fontSize: "$3" }}
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hacker Sundae
          </NavLink>
        </FlexRowContainer>
        <NavLink href="/about" target="_blank" rel="noopener noreferrer">
          about
        </NavLink>
        <NavLink href="/blog" target="_blank" rel="noopener noreferrer">
          blog
        </NavLink>
        <NavLink
          href="https://github.com/hackersundae"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </NavLink>
      </FlexRowContainer>
      <NavLink
        href="https://discord.gg/NCYacgkyZF"
        target="_blank"
        rel="noopener noreferrer"
      >
        Join the Discord
      </NavLink>
    </Nav>
  );
}
