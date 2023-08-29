import Head from "next/head";
import { Header } from "@/components/header/header";
import { PortfolioHolding } from "@/components/portfolio-holding/portfolio-holding";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Stockopedia - Portfolio</title>
        <meta
          name="description"
          content="Stockopedia Challenge - Front-end Technical Test"
        />
      </Head>
      <Header />
      <PortfolioHolding />
    </>
  );
}
