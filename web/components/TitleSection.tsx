interface TitleProps {
  title: string;
  subtitle?: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </>
  );
};

export default Title;
