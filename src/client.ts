import { createConfig, type SDKConfig } from '@lifi/sdk';
import { Chains } from './modules/chains';
import { Quotes } from './modules/quotes';
import { Router } from './modules/router';

export interface LiquidityRailConfig {
  integrator: string;
  apiKey?: string;
  // Add other LiFi config options as needed
}

export class LiquidityRailClient {
  private config: SDKConfig;
  public chains: Chains;
  public quotes: Quotes;
  public router: Router;

  constructor(options: LiquidityRailConfig) {
    this.config = createConfig({
      integrator: options.integrator,
      apiKey: options.apiKey,
      // Default to standard providers if not specified, or allow passing them
    });

    this.chains = new Chains(this.config);
    this.quotes = new Quotes(this.config);
    this.router = new Router(this.config);
  }
}
