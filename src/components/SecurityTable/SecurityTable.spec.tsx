import { SecurityTable } from "@/components/SecurityTable/SecurityTable";
import { JOHNS_PORTFOLIO } from "@/mocks/portfolio.mocks";
import { render, screen } from "@testing-library/react";

describe(SecurityTable, () => {
  it("should renders the table headers correctly", () => {
    const props = {
      holdings: JOHNS_PORTFOLIO.holdings,
    };

    render(<SecurityTable {...props} />);

    const tableHeaderName = screen.getByText("Name");
    const tableHeaderSector = screen.getByText("Sector");
    const tableHeaderShares = screen.getByText("Shares");
    const tableHeaderLastPrice = screen.getByText("Last Price");
    const tableHeaderChange = screen.getByText("Change");

    expect(tableHeaderName).toBeInTheDocument();
    expect(tableHeaderName).toHaveClass("header");

    expect(tableHeaderSector).toBeInTheDocument();
    expect(tableHeaderSector).toHaveClass("header");

    expect(tableHeaderShares).toBeInTheDocument();
    expect(tableHeaderShares).toHaveClass("header");

    expect(tableHeaderLastPrice).toBeInTheDocument();
    expect(tableHeaderLastPrice).toHaveClass("header");

    expect(tableHeaderChange).toBeInTheDocument();
    expect(tableHeaderChange).toHaveClass("header");
  });
});
