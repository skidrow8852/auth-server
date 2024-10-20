/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
declare const Parse: any;
import './generated/evmApi';
import './generated/solApi';
import { requestMessage } from '../auth/authService';

Parse.Cloud.define('requestMessage', async ({ params }: any) => {
  const { address, chain, networkType } = params;

  const message = await requestMessage({
    address,
    chain,
    networkType,
  });
  return { message };

});

Parse.Cloud.define('getPluginSpecs', () => {
  // Not implemented, only excists to remove client-side errors when using the moralis-v1 package
  return [];
});

Parse.Cloud.define('getServerTime', () => {
  // Not implemented, only excists to remove client-side errors when using the moralis-v1 package
  return null;
});

Parse.Cloud.define("getUser", async ({params} : any) => {
  const query = new Parse.Query("_User");
  const {_id} = params;
  query.equalTo("_id", _id);
  const result = await query.first({ useMasterKey: true });

  // Return the entire result object
  const res = result.toJSON();
  return res?.authData?.moralisEth
  
});
