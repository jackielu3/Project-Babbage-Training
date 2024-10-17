import BabbageSDK from '@babbage/sdk-ts'

export default function App() {
}

async function retrievePublicKey() {
    try {
        const publicKey = await BabbageSDK.getPublicKey({
            protocolID: '',
            keyID: '037d7b5697323196b16ad33224ed41af2899ec16f4914ebea5da97e047763941f6'
        });
        console.log('retrieved public key:', publicKey);
    } catch (error) {
        console.error('Error retrieving public key:', error);
    }

}

retrievePublicKey();
