const { getPublicKey } = require('@babbage/sdk-ts');
const Tokenator = require('@babbage/tokenator');

// My public key:
const jackieLu = '037d7b5697323196b16ad33224ed41af2899ec16f4914ebea5da97e047763941f6'

const external = '02be875d01cf0b4fa673a54a1919b3a055804c68930c6d5d5f67380e64093666f8'

// I made this function to show the public key of the user for step 2 of this lab
const showPublicKey = async () => {
    try {
        const publicKey = await getPublicKey({
            identityKey: true
        });

        console.log("User's Public Key:", publicKey);
    } catch (error) {
        console.error("Error getting public key:", error);
    }
};

const sendMessage = async () => {
    try {
        const tokenator = new Tokenator({
            peerServHost: 'https://staging-peerserv.babbage.systems'
        });

        const messageStatus = await tokenator.sendMessage({
            recipient: external,
            messageBox: 'L3_inbox',
            body: 'Lab L3 has been completed by Jackie Lu!'
        });

        console.log(messageStatus);

        const messages = await tokenator.listMessages({
            messageBox: 'L3_inbox'
        });

        if (messages.length > 0) {
            console.log(messages[0].body);

           await tokenator.acknowledgeMessage({
                messageIds: messages.map(x => x.messageId)
            });
        } else {
            console.log("No messages found in inbox");
        }
    } catch (error) {
        console.error("Error during messaging:", error);
    }
};

// showPublicKey();
sendMessage();