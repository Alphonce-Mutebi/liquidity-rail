import { executeRoute, convertQuoteToRoute, type LiFiStep, type ExecutionOptions, type SDKConfig, type RouteExtended } from '@lifi/sdk';
import { type Client } from 'viem';

export class Router {
  constructor(private config: SDKConfig) {}

  /**
   * Execute a route (transaction)
   */
  async executeRoute(step: LiFiStep, options?: ExecutionOptions): Promise<RouteExtended> {
    const route = convertQuoteToRoute(step);
    return executeRoute(route, options);
  }
}
