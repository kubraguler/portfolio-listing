import { PortfolioNotFound } from "@/components/PortfolioNotFound/PortfolioNotFound";
import { render, screen } from "@testing-library/react";

describe(PortfolioNotFound, () => {
  it("should renders the content correctly", () => {
    const props = {
      id: "3",
    };

    render(<PortfolioNotFound {...props} />);

    const titleElem = screen.getByText("Portfolio not found");
    const message = screen.getByText(
      `We apologise, but we could not locate a portfolio associated with the ID ${props.id}.`,
    );

    expect(titleElem).toBeInTheDocument();
    expect(titleElem).toHaveClass("title");

    expect(message).toBeInTheDocument();
    expect(message).toHaveClass("message");
  });
});
