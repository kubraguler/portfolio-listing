import Head from "next/head";
import { useEffect, useState } from "react";
import { Portfolio } from "@/models/portfolio";
import {
  PortfolioHeader,
  PortfolioHeaderProps,
} from "@/components/PortfolioHeader/PortfolioHeader";
import { PortfolioContent } from "@/components/PortfolioContent/PortfolioContent";

import styles from "../styles/styles.module.scss";

export default function Home() {
  const [portfolioData, setPortfolioData] = useState<Portfolio | null>(null);

  useEffect(() => {
    fetch("api/portfolio/1")
      .then((response) => response.json())
      .then((data) => {
        setPortfolioData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const headerValues = (): PortfolioHeaderProps => {
    const total =
      portfolioData?.holdings.reduce(
        (prevHolding, currentHolding) => prevHolding + currentHolding.lastPrice,
        0,
      ) || 0;

    return {
      title: portfolioData?.name || "",
      valuation: total,
    };
  };

  return (
    <>
      <Head>
        <title>Stockopedia Challenge</title>
        <meta
          name="description"
          content="Stockopedia Challenge - Front-end Technical Test"
        />
      </Head>
      <section className={styles.portfolio}>
        <PortfolioHeader
          title={headerValues().title}
          valuation={headerValues().valuation}
        />
        {portfolioData && (
          <PortfolioContent holdings={portfolioData.holdings} />
        )}
      </section>
    </>
  );
}
