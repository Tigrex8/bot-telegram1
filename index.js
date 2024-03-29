const TelegramBot = require('node-telegram-bot-api');
const {Telegraf} = require('telegraf')
const {axios} = require('axios')
const webAppUrl = '/'

const bot = new Telegraf('5704330474:AAHqYZkRVHyPZCfWFMAlOfLPxqwR2ri05jE')

bot.command('/start',   ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Привет, я – бот, который с удовольствием поможет тебе просто и быстро сделать заказ любых вещей любимых брендов круглосуточно ❤️', {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: '📦Заказ', callback_data: 'order'},
                    {text: '🚚Доставка', callback_data: 'delivery'}
                ],
                [
                    {text: 'ℹИнформация', callback_data: 'information'},
                    {text: '💳Расчет стоимости', callback_data: 'payment'},
                ],
                [
                    {text: '📝Отзывы', url: 'https://t.me/+SYqso9GWo4k2ZmEy'},
                ],
                [
                    {text: '🛠Тех поддержка', url: 'https://t.me/poizon_store_help'}
                ],
                [
                  /*  {text: '📱Калькулятор', callback_data: 'calculated'}*/
                ]
            ]
        }
    })
})


bot.action('order', ctx =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, '📦Заказ📦\n\n' +
        'Для того, чтобы сделать заказ необходимо:\n\n' +
        '1. Установить на телефон приложение POIZON.📲\n' +
        'Ссылка для скачивания приложения на IOS https://inlnk.ru/goxozQ\n' +
        'Ссылка для скачивания приложения на ANDROID https://m.pc6.com/s/286696\n\n' +
        '2. Выбрать любую понравившуюся пару, скопировать ссылку на товар в приложении.👗👠👕👖🥾 \n\n' +
        '3. Вернуться в Телеграмм к боту POIZON_STORE.\n' +
        'Далее нажать на синюю кнопку «Заказ», заполнить форму в открывшемся окне, отправить данные нам. \n\n' +
        '4. После успешного оформления заказа мы с вами свяжемся для уточнения всех деталей.\n\n' +
        '5. Производите оплату.👛 \n\n' +
        '6. Мы заказываем и привозим пару(ы) за 20-25 дней (экспресс-доставкой 11-15 дней).🚚 \n\n' +
        'В случае возникновения проблем или вопросов необходимо обратиться в нашу поддержку @poizon_store_help', {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'Назад в меню', callback_data: 'menu'},
                ]
            ]
        }
    })
})

bot.action('menu', ctx =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Привет, я – бот, который с удовольствием поможет тебе просто и быстро сделать заказ любых вещей любимых брендов круглосуточно ❤️', {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: '📦Заказ', callback_data: 'order'},
                    {text: '🚚Доставка', callback_data: 'delivery'}],
                [
                    {text: 'ℹИнформация', callback_data: 'information'},
                    {text: '💳Расчет стоимости', callback_data: 'payment'},
                ],
                [
                    {text: '📝Отзывы', url: 'https://t.me/+SYqso9GWo4k2ZmEy'},

                ],
                [
                    {text: '🛠Тех поддержка', url: 'https://t.me/poizon_store_help'}
                ],
                [
                /*    {text: '📱Калькулятор', callback_data: 'calculated'}*/
                ]
            ]

        }


    })
})

bot.action('delivery', ctx =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Все товары приходят в Москву за 20-25 дней, экспресс доставкой ~15 дней, затем отправляются почтой России или другим способом в Ваш город (В Москве можно забрать лично).📦 \n\n' +
    'Стоимость (за пару) обычной доставки до Москвы ~  900 рублей🚚\n' +
    'Стоимость (за пару) экспресс-доставки до Москвы ~ 1800 рублей🚛⚡️\n' ,
         {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'Назад в меню', callback_data: 'menu'},
                ]
            ]
        }
    })
})

bot.action('menu', ctx =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Привет, я – бот, который с удовольствием поможет тебе просто и быстро сделать заказ любых вещей любимых брендов круглосуточно ❤️', {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: '📦Заказ', callback_data: 'order'},
                    {text: '🚚Доставка', callback_data: 'delivery'}],
                [
                    {text: 'ℹИнформация', callback_data: 'information'},
                    {text: '💳Расчет стоимости', callback_data: 'payment'},
                ],
                [
                    {text: '📝Отзывы', url: 'https://t.me/+SYqso9GWo4k2ZmEy'},

                ],
                [
                    {text: '🛠Тех поддержка', url: 'https://t.me/poizon_store_help'}
                ],
                [
                /*    {text: '📱Калькулятор', callback_data: 'calculated'}*/
                ]
            ]

        }


    })
})

bot.action('information', ctx =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, '❓Что такое POIZON?❓\n\n' +
        'POIZON — китайская торговая площадка, специализирующаяся на продаже оригинальных кроссовок, предметов одежды, коллекционных вещей и многого другого. Это микс реселл-площадки, интернет-магазина, сервиса проверки на оригинальность, упаковки и доставки покупателю.\n' +
        '❓Оригинальны ли товары в POIZON?❓\n\n' +
        'Сейчас POIZON ассоциируют с китайским аналогом американского StockX, 💯% оригинальностью и высоким уровнем проверки и сопутствующих услуг.\n' +
        'POIZON пошли на очень серьезное улучшение сервиса и внедрили несколько степеней проверки. Согласно последним данным, платформа подтверждает в среднем 4851 пару за один день.\n', {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'Назад в меню', callback_data: 'menu'},
                ]
            ]
        }
    })
})

bot.action('menu', ctx =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Привет, я – бот, который с удовольствием поможет тебе просто и быстро сделать заказ любых вещей любимых брендов круглосуточно ❤️', {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: '📦Заказ', callback_data: 'order'},
                    {text: '🚚Доставка', callback_data: 'delivery'}],
                [
                    {text: 'ℹИнформация', callback_data: 'information'},
                    {text: '💳Расчет стоимости', callback_data: 'payment'},
                ],
                [
                    {text: '📝Отзывы', url: 'https://t.me/+SYqso9GWo4k2ZmEy'},

                ],
                [
                    {text: '🛠Тех поддержка', url: 'https://t.me/poizon_store_help'}
                ],
                [
                /*    {text: '📱Калькулятор', callback_data: 'calculated'}*/
                ]
            ]

        }


    })
})

bot.action('payment', ctx =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, '💲Как рассчитать стоимость💲\n\n' +
        'Стоимость рассчитывается следующим образом:\n' +
        'Указанная стоимость в юанях в приложении + доставка в Москву + 5% от суммы за работу нашему помощнику из Китая + наша работа и доставка почтой.\n\n' +
        '▫️Нашу работу мы оцениваем следующим образом: 10% от стоимости товаров, если итоговая сумма больше 10000 рублей, до 10000 рублей итоговой суммы наша работа будет стоить 1000р, стоимость доставки в другой город рассчитывается индивидуально.▫️\n\n' +
        '❕Все товары приходят в Москву, затем отправляются почтой или другим способом в Ваш город (В Москве можно забрать лично)❕\n\n' +
        '❗ В среднем курс юаня к рублю составляет ~ 12,5 юаней за рубль❗ \n\n' +
        '‼️Оплата проходит по переводу, работаем только по 100% предоплате.‼️\n\n' +
        '‼️Обращаем ваше внимание на то, что товар возврату не подлежит.‼️\n',
        {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'Назад в меню', callback_data: 'menu'},
                ]
            ]
        }
    })
})

bot.action('menu', ctx =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Привет, я – бот, который с удовольствием поможет тебе просто и быстро сделать заказ любых вещей любимых брендов круглосуточно ❤️', {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: '📦Заказ', callback_data: 'order'},
                    {text: '🚚Доставка', callback_data: 'delivery'}],
                [
                    {text: 'ℹИнформация', callback_data: 'information'},
                    {text: '💳Расчет стоимости', callback_data: 'payment'},
                ],
                [
                    {text: '📝Отзывы', url: 'https://t.me/+SYqso9GWo4k2ZmEy'},

                ],
                [
                    {text: '🛠Тех поддержка', url: 'https://t.me/poizon_store_help'}
                ],
                [
                  /*  {text: '📱Калькулятор', callback_data: 'calculated'}*/
                ]
            ]

        }


    })
})

bot.action('review', ctx =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Привет, я – бот, который с удовольствием поможет тебе просто и быстро сделать заказ любых вещей любимых брендов круглосуточно ❤️', {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: '📦Заказ', callback_data: 'order'},
                    {text: '🚚Доставка', callback_data: 'delivery'}],
                [
                    {text: 'ℹИнформация', callback_data: 'information'},
                    {text: '💳Расчет стоимости', callback_data: 'payment'},
                ],
                [
                    {text: '📝Отзывы', url: 'https://t.me/+SYqso9GWo4k2ZmEy'},

                ],
                [
                    {text: '🛠Тех поддержка', url: 'https://t.me/poizon_store_help'}
                ],
                [
                 /*   {text: '📱Калькулятор', callback_data: 'calculated'}*/
                ]
            ]

        }


    })
})
bot.action('menu', ctx =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Привет, я – бот, который с удовольствием поможет тебе просто и быстро сделать заказ любых вещей любимых брендов круглосуточно ❤️', {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: '📦Заказ', callback_data: 'order'},
                    {text: '🚚Доставка', callback_data: 'delivery'}],
                [
                    {text: 'ℹИнформация', callback_data: 'information'},
                    {text: '💳Расчет стоимости', callback_data: 'payment'},
                ],
                [
                    {text: '📝Отзывы', url: 'https://t.me/+SYqso9GWo4k2ZmEy'},

                ],
                [
                    {text: '🛠Тех поддержка', url: 'https://t.me/poizon_store_help'}
                ],
                [
                /*    {text: '📱Калькулятор', callback_data: 'calculated'}*/
                ]
            ]

        }


    })
})
bot.action('calculated', ctx =>{
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, 'Введите сумму в юанях:', {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'Назад в меню', callback_data: 'menu'},
                ]
            ]
        }
    })
})


bot.launch()