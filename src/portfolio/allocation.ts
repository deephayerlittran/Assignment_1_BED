import type { Asset } from "./largestHolding";
 
export interface AllocationResult {
  [assetName: string]: number;
}

export function assetAllocationPercentage(assets: Asset[]): AllocationResult {
    return {};
}