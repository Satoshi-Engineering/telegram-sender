export default class TelegramSender {
    constructor({ token, defaultChatId, messagePrefix, messageMaxLength, }: {
        token: string;
        defaultChatId: string;
        messagePrefix?: string;
        messageMaxLength?: number;
    });
    protected token: string;
    protected defaultChatId: string;
    protected messagePrefix?: string;
    protected messageMaxLength: number;
    /**
     * Returns status code 0 if successful
     *
     * @returns
     */
    sendMessage({ message, chatId, }: {
        message: string;
        chatId?: string;
    }): Promise<1 | 0>;
}
