export interface LayoutProps {
    children: JSX.Element;
    description: string;
  }

export interface TitleProps {
  title: string;
  subtitle?: string;
}

export interface BodyProps {
  title: string;
  children: JSX.Element;
}

export interface BigLinkProps {
  linkTitle: string;
  subtitle?: string;
}

export interface HomeProps {
  titleProps: TitleProps;
  bodyProps: BodyProps;
  linkProps: BigLinkProps;
}