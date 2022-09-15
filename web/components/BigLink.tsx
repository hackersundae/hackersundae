interface BigLinkProps {
    linkTitle: string;
    subtitle?: string;
  }
  
  const BigLink: React.FC<BigLinkProps> = ({ linkTitle, subtitle }) => {
    return (
      <>
        <a>{linkTitle}</a>
        {subtitle && <p>{subtitle}</p>}
      </>
    );
  };
  
  export default BigLink;