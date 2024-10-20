import Moralis from 'moralis';

export interface RequestMessage {
  address: string;
  chain: string;
  networkType: string;
}

const DOMAIN = 'account.cratch.io';
const STATEMENT = 'Please sign this message to confirm your identity.';
const URI = 'https://account.cratch.io';
const EXPIRATION_TIME = '2025-02-01T17:23:55.728Z';
const TIMEOUT = 60;

export async function requestMessage({
  address,
  chain,
  networkType,
}: {
  address: string;
  chain: string;
  networkType: 'evm';
}) {
  const result = await Moralis.Auth.requestMessage({
    address,
    chain,
    networkType,
    domain: DOMAIN,
    statement: STATEMENT,
    uri: URI,
    expirationTime: EXPIRATION_TIME,
    timeout: TIMEOUT,
  });

  const { message } = result.toJSON();

  return message;
}
