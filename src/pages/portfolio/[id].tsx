import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Portfolio } from "@/models/portfolio";
import {
  PortfolioHeader,
  PortfolioHeaderProps,
} from "@/components/PortfolioHeader/PortfolioHeader";
import { PortfolioContent } from "@/components/PortfolioContent/PortfolioContent";
import { PortfolioNotFound } from "@/components/PortfolioNotFound/PortfolioNotFound";

import styles from "@/styles/styles.module.scss";

export default function PortfolioPage() {
  const router = useRouter();
  const [portfolioData, setPortfolioData] = useState<Portfolio | null>(null);
  const [showNotFound, setShowNotFound] = useState(false);

  useEffect(() => {
    if (!router.query.id) {
      return;
    }
    fetch(`/api/portfolio/${router.query.id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 404) {
          setShowNotFound(true);
          setPortfolioData(null);
          throw new Error("404");
        }
      })
      .then((data) => {
        setShowNotFound(false);
        setPortfolioData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [router.query.id]);

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
        {showNotFound && <PortfolioNotFound id={router.query.id} />}

        {portfolioData && (
          <>
            <PortfolioHeader
              title={headerValues().title}
              valuation={headerValues().valuation}
            />
            <PortfolioContent holdings={portfolioData.holdings} />
          </>
        )}
      </section>
    </>
  );
}
