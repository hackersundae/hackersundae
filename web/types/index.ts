export interface LayoutProps {
    children: JSX.Element;
    description: string;
  }

export interface TitleProps {
  title: string;
  subtitle?: string;
  split?: number;
}

export interface BodyProps {
  title: string;
  children: JSX.Element | string;
}

export interface BigLinkProps {
  url: string;
  linkTitle: string;
  subtitle?: string;
}

export interface HomeProps {
  titleProps: TitleProps;
  bodyProps: BodyProps;
  linkProps: BigLinkProps;
}