"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class TelegramSender {
    constructor({ token, defaultChatId, messagePrefix, messageMaxLength = 500, }) {
        this.token = token;
        this.defaultChatId = defaultChatId;
        this.messagePrefix = messagePrefix;
        this.messageMaxLength = messageMaxLength;
    }
    token;
    defaultChatId;
    messagePrefix;
    messageMaxLength;
    /**
     * Returns status code 0 if successful
     *
     * @returns
     */
    async sendMessage({ message, chatId, }) {
        if (!this.token) {
            return 1;
        }
        let messageFormatted = '';
        if (this.messagePrefix != null && this.messagePrefix.length > 0) {
            messageFormatted += `[${this.messagePrefix}]\n`;
        }
        messageFormatted += message;
        if (messageFormatted.length > this.messageMaxLength) {
            messageFormatted = messageFormatted.substring(0, this.messageMaxLength) + ' (Message Truncated)';
        }
        const url = `https://api.telegram.org/bot${this.token}/sendMessage`;
        const data = JSON.stringify({
            'chat_id': chatId || this.defaultChatId,
            'text': messageFormatted,
        });
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            await axios_1.default.post(url, data, config);
        }
        catch (error) {
            // error makes no sense, would just trigger another send that will fail
            console.warn('Unable to send message to telegram bot!', error);
        }
        return 0;
    }
}
exports.default = TelegramSender;
