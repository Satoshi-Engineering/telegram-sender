# TelegramSender

A simple helper class that sends messages to a telegram group via a bot.

Uses [axios](https://github.com/axios/axios) for the GET request to the Telegram API.

### Installation
```bash
npm i https://github.com/Satoshi-Engineering/telegram-sender
```

### Usage
First you need to create a bot and invite it to a Telegram group according to [Telegram's Bot FAQs](https://core.telegram.org/bots/faq#how-do-i-create-a-bot)


```typescript
import TelegramSender from 'telegram-sender'

const telegramSender = new TelegramSender({
  token: 'TOKEN_OF_YOUR_BOT',
  defaultChatId: 'ID_OF_THE_TARGET_CHAT',
  messagePrefix: 'Prefix', // optional, will get prepended to every message
  messageMaxLength: 200, // default 500, longer messages will get truncated and marked with '(Message Truncated)'
})

const code = await telegramSender.sendMessage{{
  message: 'This message will be sent to your group.',
  chatId: 'ID_OF_THE_TARGET_CHAT', // optional, if you want to override the defaultChatId specified in the instance
}}

// `code` will be 0 if the API requests succeeded and 1 in case of an error
```
