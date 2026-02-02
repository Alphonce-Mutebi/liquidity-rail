import { getQuote, type QuoteRequest, type LiFiStep, type SDKConfig } from '@lifi/sdk';

export class Quotes {
  constructor(private config: SDKConfig) {}

  /**
   * Get a quote for a swap/bridge
   */
  async getQuote(params: QuoteRequest): Promise<LiFiStep> {
    // @ts-ignore - bypassing overload mismatch for now, passing params directly
    return getQuote(params);
  }
}
