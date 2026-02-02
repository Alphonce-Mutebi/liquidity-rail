import { getChains, getTokens, type Chain, type Token, type SDKConfig } from '@lifi/sdk';

export class Chains {
  constructor(private config: SDKConfig) {}

  /**
   * Get all supported chains
   */
  async getChains(): Promise<Chain[]> {
    return getChains();
  }

  /**
   * Get tokens for a specific chain or all chains
   */
  async getTokens(chains?: number[]): Promise<{ [chainId: number]: Token[] }> {
    const result = await getTokens({ chains });
    return result.tokens;
  }
}
