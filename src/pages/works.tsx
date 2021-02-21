import Head from "next/head";
import { Header } from "../components/shared/Header";
import { PageTitle } from "../components/shared/PageTitle";
import { Wrapper } from "../components/shared/Wrapper";
import { Footer } from "../components/shared/Footer";

const Works: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ranze official site | works</title>
      </Head>
      <Wrapper>
        <Header />
        <article>
          <section>
            <PageTitle title="Works" />
          </section>
        </article>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Works;
