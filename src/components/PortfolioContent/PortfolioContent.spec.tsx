import { PortfolioContent } from "@/components/PortfolioContent/PortfolioContent";
import { render, screen } from "@testing-library/react";
import { JOHNS_PORTFOLIO } from "@/mocks/portfolio.mocks";

describe(PortfolioContent, () => {
  it("should renders the holdings values correctly", () => {
    const props = {
      holdings: JOHNS_PORTFOLIO.holdings,
    };

    render(<PortfolioContent {...props} />);

    const headerElem = screen.getByText(`Holdings (${props.holdings.length})`);
    const sectorsElem = screen.getByText("Sectors:");

    expect(headerElem).toBeInTheDocument();
    expect(headerElem).toHaveClass("header");

    expect(sectorsElem).toBeInTheDocument();
    expect(sectorsElem).toHaveClass("title");
  });
});
