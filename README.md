# TelegramSender

_by the [#sathoshiengineeringcrew](https://satoshiengineering.com/)_

[![MIT License Badge](license-badge.svg)](LICENSE)

Telegram Sender is a helper class designed to send messages to a Telegram chat via a bot. It simplifies the process of integrating Telegram messaging into applications by utilizing the Telegram API.

### Overview

- Sends messages to a specified Telegram chat
- Uses [Axios](https://github.com/axios/axios) for API requests
- Allows configuration of bot token, chat ID, message prefix, and maximum message length

## Installation
```bash
npm i telegram-sender
```

## Usage
First you need to create a bot and invite it to a Telegram chat according to [Telegram's Bot FAQs](https://core.telegram.org/bots/faq#how-do-i-create-a-bot)


```typescript
import TelegramSender from 'telegram-sender'

const telegramSender = new TelegramSender({
  token: 'YOUR_BOT_TOKEN',
  defaultChatId: 'TARGET_CHAT_ID',
  messagePrefix: 'Optional Prefix', // optional, will get prepended to every message: '[Optional Prefix]'
  messageMaxLength: 200, // default 500, longer messages will get truncated and marked with '(Message Truncated)'
})

const code = await telegramSender.sendMessage{{
  message: 'This message will be sent to your group.',
  chatId: 'ID_OF_THE_TARGET_CHAT', // optional, if you want to override the defaultChatId
}}

```

The `sendMessage` method returns `0` on success and `1` on error.

## Release
To create a new release, run the **Create Release** GitHub Action. It bumps the version, updates the changelog, tags the release, pushes to `main`, and publishes to npm automatically via the publish workflow.

## Tip Us

If you like this project, give it a star! If you love it, fork it and take it out for dinner. 🌟🍽️  
And hey, why not [send some tip love?](https://satoshiengineering.com/tipjar/)
