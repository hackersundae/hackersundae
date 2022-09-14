import Head from "next/head";
import { styled } from "../stitches.config";

const Box = styled("div", {});

const Text = styled("p", {
  fontFamily: "$system",
  color: "$gray600",
});

const NavLink = styled("a", {
  textDecoration: "none",
  fontFamily: "$system",
  fontSize: "$2",
  color: "$loContrast"
});

const Link = styled("a", {
  fontFamily: "$system",
  color: "$purple500",
});

const Container = styled("div", {
  marginX: "auto",
  paddingX: "$3",

  variants: {
    size: {
      1: {
        maxWidth: "300px",
      },
      2: {
        maxWidth: "585px",
      },
      3: {
        maxWidth: "865px",
      },
    },
  },
});

export default function Home() {
  return (
    <Box css={{ paddingY: "$1" }}>
      <Head>
        <title>Hacker Sundae</title>
        <meta name="description" content="Hackathon group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container size={{ "@initial": "1", "@bp1": "2" }}>
        <nav
          style={{
            display: "flex",
            backgroundColor: "#5E5184",
            padding: ".25rem .25rem",
            color: "white",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
            <div
              style={{ display: "flex", alignItems: "center", gap: ".3rem" }}
            >
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
            </div>
            <NavLink
              href="/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              about
            </NavLink>
            <NavLink
              href="/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              blog
            </NavLink>
            <NavLink
              href="https://github.com/hackersundae"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </NavLink>
          </div>
          <NavLink
            href="https://discord.gg/NCYacgkyZF"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the Discord
          </NavLink>
        </nav>
        <Text>
          Founded in 2016, we are a collective of hackers who host a weekly
          hack-a-thon on Sundays. We band together to explore our ideas and hack
          them into existence. We are developers, artists, students, and
          friends. Hacker Sunday is supposed to be a sustainable hack-a-thon
          experience, unlike your typical 24hr hack-a-thon.
        </Text>
        <Text>
          There's no specific topic except you can't hack on “work” projects.
          Hacker Sunday is a place where you can explore freely with the support
          of your peers. We want to set aside Sundays for you to try things out
          and genuinely do cool shit. Not do more work for your corporate
          overlords.
        </Text>
      </Container>
    </Box>
  );
}
