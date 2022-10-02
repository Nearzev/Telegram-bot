const telegramApi = require('node-telegram-bot-api');

const token = '5618080650:AAFnqxiJkkp0W9baZvansShLs9X2ipnX-Ys';

const bot = new telegramApi(token, {polling: true})

bot.setMyCommands([
    {command: '/start', description: 'Начало работы с ботом'},
    {command: '/info', description: 'Информация о боте'},
    {command: '/vk', description: 'Узнать мой вк'},
    {command: '/telegram', description: 'Узнать мой телеграм'},
])

const socialNetworks = {
    VK: `https://vk.com/odoglwn`,
    telegram:`https://t.me/thesinsflower`
}



function start () {
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
    
        if (text === '/start') {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/0b1/31b/0b131ba6-af59-4dbe-a0cb-5abcda5bc6be/1.webp')
            return bot.sendMessage(chatId, `Добро пожаловать в мой телеграм бот`);
        }
        if(text === '/info') {
            return bot.sendMessage(chatId, `Привет ${msg.from.first_name}, в этом телеграм боте ты можешь узнать мои социальные сети`)
        }
        if(text === '/vk') {
            return bot.sendMessage(chatId, `Мой вк ${socialNetworks.VK}`)
        }
        if(text === '/telegram') {
            return bot.sendMessage(chatId, `Мой телеграм ${socialNetworks.telegram}`)
        }
        if (text === 'ты тупой' || text === 'ты глупый' || text === 'ты тупой?' || text === 'ты глупый?') {
            return bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/0b1/31b/0b131ba6-af59-4dbe-a0cb-5abcda5bc6be/7.webp')
        }
        if(text === 'Спасибо' || text === 'спасибо' || text === 'Спc' || text === 'спасиб' || text === 'сенкс') {
            return bot.sendSticker(chatId, `https://tlgrm.ru/_/stickers/0b1/31b/0b131ba6-af59-4dbe-a0cb-5abcda5bc6be/192/22.webp`)
        }
        await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/0b1/31b/0b131ba6-af59-4dbe-a0cb-5abcda5bc6be/8.webp')
        return bot.sendMessage(chatId, 'Я тебя не понимаю, попробуй использовать доступные команды!')
    })
}
start()