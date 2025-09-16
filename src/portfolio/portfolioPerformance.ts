export interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}

export function calculatePortfolioPerformance(
    initialInvestment: number,
    currentValue: number
): PortfolioPerformance {
    return {
      initialInvestment,
      currentValue,
      profitOrLoss: 0,
      percentageChange: 0,
      performanceSummary: "TODO"
    };
}