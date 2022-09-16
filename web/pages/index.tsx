// components
import Layout from "../components/Layout";
import Title from "../components/TitleSection";
import Body from "../components/BodySection";
import BigLink from "../components/BigLink";
// utils
import data from "../utils/data/default.json";
// types
import { HomeProps } from "../utils/types";

const Home: React.FC<HomeProps> = ({ titleProps, bodyProps, linkProps }) => {
  const children = (
    <div dangerouslySetInnerHTML={{ __html: bodyProps.children }}></div>
  );
  bodyProps = { ...bodyProps, children };
  return (
    <Layout description="Hackathon Group">
      <>
        <Title {...titleProps} />
        <Body {...bodyProps} />
        <BigLink {...linkProps} />
      </>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: { ...data },
  };
}
