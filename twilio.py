from twilio.rest import Client  

client = Client("TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN")  
client.messages.create(
    from_="whatsapp:+14155238886",  
    to="whatsapp:+USER_NUMBER",  
    body="Here are some events you might like: ..."
)  
