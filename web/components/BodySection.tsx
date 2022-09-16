// types
import { BodyProps } from "../types";

const Body: React.FC<BodyProps> = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};

export default Body;
