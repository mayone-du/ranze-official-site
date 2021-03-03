import Head from "next/head";
import { Wrapper } from "./Wrapper";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout: React.VFC<{
  children: any;
  metaTitle: string;
  metaDescription: string;
}> = ({ children, metaTitle, metaDescription }) => {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <Wrapper>
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </>
  );
};

export { Layout };