import { LiquidityRailClient, ChainId } from '../src';

async function main() {
  console.log('Initializing SDK...');
  const client = new LiquidityRailClient({
    integrator: 'liquidity-rail-test',
  });

  console.log('Fetching chains...');
  const chains = await client.chains.getChains();
  console.log(`Found ${chains.length} chains.`);
  if (chains.length > 0) {
    console.log('First chain:', chains[0].name);
  }

  console.log('Fetching tokens for ETH Mainnet (1)...');
  const tokens = await client.chains.getTokens([ChainId.ETH]);
  const ethTokens = tokens[ChainId.ETH];
  console.log(`Found ${ethTokens?.length || 0} tokens on Ethereum.`);
  
  if (ethTokens && ethTokens.length > 0) {
    console.log('First token:', ethTokens[0].symbol);
  }

  // Try to get a quote (ETH -> USDC on Eth Mainnet for simplicity, or cross chain)
  // 1 ETH to USDC
  try {
     console.log('Fetching quote for 1 ETH -> USDC on Ethereum...');
     // ETH address: 0x0000000000000000000000000000000000000000
     // USDC address (Eth): 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48
     const quote = await client.quotes.getQuote({
       fromChain: ChainId.ETH,
       toChain: ChainId.ETH,
       fromToken: '0x0000000000000000000000000000000000000000',
       toToken: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
       fromAmount: '1000000000000000000', // 1 ETH
       fromAddress: '0x552008c0f6870c2f77e5cC1d2eb9bdff03e30Ea0', // Dummy address
     });
     console.log('Quote received!');
     console.log('Estimated Output:', quote.estimate.toAmount);
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}

main().catch(console.error);
