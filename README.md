# TelegramSender

_by the [#sathoshiengineeringcrew](https://satoshiengineering.com/)_

[![MIT License Badge](docs/img/license-badge.svg)](LICENSE)

Telegram Sender is a helper class designed to send messages to a Telegram group/id via a bot. It simplifies the process of integrating Telegram messaging into applications by utilizing the Telegram API.

### Features:

- Sends messages to a specified Telegram group / Chat Id
- Uses [Axios](https://github.com/axios/axios)  for API requests
- Allows configuration of bot token, chat ID, message prefix, and message length

## Installation
```bash
npm i telegram-sender
```

## Usage
First you need to create a bot and invite it to a Telegram group according to [Telegram's Bot FAQs](https://core.telegram.org/bots/faq#how-do-i-create-a-bot)


```typescript
import TelegramSender from 'telegram-sender'

const telegramSender = new TelegramSender({
  token: 'YOUR_BOT_TOKEN',
  defaultChatId: 'TARGET_CHAT_ID',
  messagePrefix: 'Optional Prefix', // optional, will get prepended to every message
  messageMaxLength: 200, // default 500, longer messages will get truncated and marked with '(Message Truncated)'
})

const code = await telegramSender.sendMessage{{
  message: 'This message will be sent to your group.',
  chatId: 'ID_OF_THE_TARGET_CHAT', // optional, if you want to override the defaultChatId specified in the instance
}}

```

The `sendMessage` method returns `0` on success and `1` on error.

## Tip Us

If you like this project, give it a star! If you love it, fork it and take it out for dinner. 🌟🍽️ And hey, why not [send some tip love?](https://satoshiengineering.com/tipjar/)
