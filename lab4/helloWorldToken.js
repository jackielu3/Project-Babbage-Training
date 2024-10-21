const { createAction, toBEEFfromEnvelope } = require('@babbage/sdk-ts');
const { HelloTokens } = require('hello-tokens');

(async () => {
  try {
    const script = await HelloTokens.createOutputScript('Hello Bockchain!');
    const overlayURL = 'https://staging-overlay.babbage.systems'
    
    const createActionResult = await createAction({
      outputs: [
        {
          satoshis: 1,
          script,
          description: 'New HelloWorld token'
        },
      ],
      description: 'Create a new Hello World token',
    });

    const beef = toBEEFfromEnvelope({
      rawTx: createActionResult.rawTx,
      inputs: createActionResult.inputs,
      txid: createActionResult.txid,
    }).beef;

    const submitResult = await fetch(
      `${overlayURL}/submit`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/octet-stream',
          'X-Topics': JSON.stringify(['tm_helloworld']),
        },
        body: new Uint8Array(beef),
      }
    );

    const lookupResult = await fetch(
      `${overlayURL}/lookup`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service: 'ls_helloworld',
          query: 'Hello Blockchain!',
        }),
      }
    );

    if (!lookupResult.ok) {
      throw new Error(`Lookup failed: ${lookupResult.statusText}`);
    }

    const lookupAnswer = await lookupResult.json()

    // console.log('Lookup Answer:', lookupAnswer)

    const message = await HelloTokens.parseLookupAnswer(lookupAnswer)

    console.log('Parsed Message:', message);
  } catch (error) {
    console.error('Error:', error);
  }
})();
