from telegram import Bot  

bot = Bot(token="YOUR_TELEGRAM_BOT_TOKEN")  
bot.send_message(chat_id=USER_CHAT_ID, text="Here are some upcoming events: ...")
