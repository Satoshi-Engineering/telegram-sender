export default class TelegramSender {
    constructor({ token, defaultChatId, messagePrefix, messageMaxLength, telegramApiOriginOverride, }: {
        token: string;
        defaultChatId: string;
        messagePrefix?: string;
        messageMaxLength?: number;
        telegramApiOriginOverride?: string;
    });
    protected token: string;
    protected defaultChatId: string;
    protected messagePrefix?: string;
    protected messageMaxLength: number;
    protected telegramApiOriginOverride?: string;
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
