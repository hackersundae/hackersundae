import { styled } from "../stitches.config";
import Layout from "../components/Layout";

const Text = styled("p", {
  fontFamily: "$system",
  color: "$gray600",
});

export default function Home() {
  return (
    <Layout description="Hackathon Group">
      <Text>
        Founded in 2016, we are a collective of hackers who host a weekly
        hack-a-thon on Sundays. We band together to explore our ideas and hack
        them into existence. We are developers, artists, students, and friends.
        Hacker Sunday is supposed to be a sustainable hack-a-thon experience,
        unlike your typical 24hr hack-a-thon.
      </Text>
      <Text>
        There's no specific topic except you can't hack on “work” projects.
        Hacker Sunday is a place where you can explore freely with the support
        of your peers. We want to set aside Sundays for you to try things out
        and genuinely do cool shit. Not do more work for your corporate
        overlords.
      </Text>
    </Layout>
  );
}
