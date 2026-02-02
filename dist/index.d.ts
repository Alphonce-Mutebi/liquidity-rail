import { SDKConfig, Chain, Token, QuoteRequest, LiFiStep, ExecutionOptions, RouteExtended } from '@lifi/sdk';
export * from '@lifi/sdk';

declare class Chains {
    private config;
    constructor(config: SDKConfig);
    /**
     * Get all supported chains
     */
    getChains(): Promise<Chain[]>;
    /**
     * Get tokens for a specific chain or all chains
     */
    getTokens(chains?: number[]): Promise<{
        [chainId: number]: Token[];
    }>;
}

declare class Quotes {
    private config;
    constructor(config: SDKConfig);
    /**
     * Get a quote for a swap/bridge
     */
    getQuote(params: QuoteRequest): Promise<LiFiStep>;
}

declare class Router {
    private config;
    constructor(config: SDKConfig);
    /**
     * Execute a route (transaction)
     */
    executeRoute(step: LiFiStep, options?: ExecutionOptions): Promise<RouteExtended>;
}

interface LiquidityRailConfig {
    integrator: string;
    apiKey?: string;
}
declare class LiquidityRailClient {
    private config;
    chains: Chains;
    quotes: Quotes;
    router: Router;
    constructor(options: LiquidityRailConfig);
}

export { Chains, LiquidityRailClient, type LiquidityRailConfig, Quotes, Router };
