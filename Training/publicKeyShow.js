"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
const sdk_ts_1 = __importDefault(require("@babbage/sdk-ts"));
function App() {
}
function retrievePublicKey() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const publicKey = yield sdk_ts_1.default.getPublicKey({
                protocolID: '',
                keyID: '037d7b5697323196b16ad33224ed41af2899ec16f4914ebea5da97e047763941f6'
            });
            console.log('retrieved public key:', publicKey);
        }
        catch (error) {
            console.error('Error retrieving public key:', error);
        }
    });
}
retrievePublicKey();
