import axios from 'axios'

export default class TelegramSender {
  constructor({
    token,
    defaultChatId,
    messagePrefix,
    messageMaxLength = 500,
  }: {
    token: string,
    defaultChatId: string,
    messageMaxLength: number,
    messagePrefix: string,
  }) {
    this.token = token
    this.defaultChatId = defaultChatId
    this.messagePrefix = messagePrefix
    this.messageMaxLength = messageMaxLength
  }

  protected token: string
  protected defaultChatId: string
  protected messagePrefix: string
  protected messageMaxLength: number

  /**
   * Returns status code 0 if successful
   * 
   * @returns
   */
  async sendMessage({
    message,
    chatId,
  }: {
    message: string,
    chatId?: string,
  }) {
    if (!this.token) {
      return 1
    }

    let messageFormatted = ''
    if (this.messagePrefix) {
      messageFormatted += `[${this.messagePrefix}]\n`
    }
    messageFormatted += message
    if (messageFormatted.length > this.messageMaxLength) {
      messageFormatted = messageFormatted.substring(0, this.messageMaxLength) + ' (Message Truncated)'
    }

    const url = `https://api.telegram.org/bot${this.token}/sendMessage`

    const data = JSON.stringify({
      'chat_id': chatId || this.defaultChatId,
      'text': messageFormatted,
    })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      await axios.post(url, data, config)
    } catch (error) {
      // error makes no sense, would just trigger another send that will fail
      console.warn('Unable to send message to telegram bot!', error)
    }
    return 0
  }
}
