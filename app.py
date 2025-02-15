from fastapi import FastAPI  
from langchain.chains import LLMChain  
from langchain.prompts import PromptTemplate  

app = FastAPI()

@app.post("/recommend_event/")
async def recommend_event(user_preferences: dict):
    prompt = PromptTemplate(
        input_variables=["preferences"],
        template="Suggest upcoming events based on: {preferences}"
    )
    chain = LLMChain(llm=llm, prompt=prompt)
    return {"recommendations": chain.run(preferences=user_preferences)}
