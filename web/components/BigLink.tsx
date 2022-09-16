// types
import { BigLinkProps } from "../types";
  
  const BigLink: React.FC<BigLinkProps> = ({ url, linkTitle, subtitle }) => {
    return (
      <>
        <a href={url} target="_blank" rel="noopener noreferrer">{linkTitle}</a>
        {subtitle && <p>{subtitle}</p>}
      </>
    );
  };
  
  export default BigLink;