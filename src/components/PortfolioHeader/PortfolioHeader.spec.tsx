import { PortfolioHeader } from "@/components/PortfolioHeader/PortfolioHeader";
import { render, screen } from "@testing-library/react";

describe(PortfolioHeader, () => {
  it("should renders the title and valuation correctly", () => {
    const props = {
      title: "Portfolio",
      valuation: 2106.4,
    };

    render(<PortfolioHeader {...props} />);

    const titleElem = screen.getByText(props.title);
    const valuationLabelElem = screen.getByText("Valuation");
    const valuationElem = screen.getByText("£2,106.40");

    expect(titleElem).toBeInTheDocument();
    expect(titleElem).toHaveClass("title");

    expect(valuationLabelElem).toBeInTheDocument();
    expect(valuationLabelElem).toHaveClass("label");

    expect(valuationElem).toBeInTheDocument();
    expect(valuationElem).toHaveClass("valuation");
  });

  it("should renders the valuation with big number correctly", () => {
    const props = {
      title: "Portfolio",
      valuation: 210905453426.48,
    };

    render(<PortfolioHeader {...props} />);
    const valuationElem = screen.getByText("£210,905,453,426.48");

    expect(valuationElem).toBeInTheDocument();
  });

  it("should renders the valuation with 0 correctly", () => {
    const props = {
      title: "Portfolio",
      valuation: 0,
    };

    render(<PortfolioHeader {...props} />);
    const valuationElem = screen.getByText("£0.00");

    expect(valuationElem).toBeInTheDocument();
  });

  it("should renders the valuation with negative value correctly", () => {
    const props = {
      title: "Portfolio",
      valuation: -4000.67,
    };

    render(<PortfolioHeader {...props} />);
    const valuationElem = screen.getByText("-£4,000.67");

    expect(valuationElem).toBeInTheDocument();
  });
});
