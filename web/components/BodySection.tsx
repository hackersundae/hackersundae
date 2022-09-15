interface BodyProps {
  title: string;
  children: JSX.Element;
}

const Body: React.FC<BodyProps> = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};

export default Body;
