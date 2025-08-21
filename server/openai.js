import { OpenAI } from "openai";
import { config } from "dotenv";
import fs from 'fs/promises';
import { addMessage, getMessages } from "./chatmemory.js";

config();
const client=new OpenAI()
const message=getMessages()

const SYSTEMPROMPT = await fs.readFile('../server/system_prompt.txt', 'utf-8');

async function main(userquery) {
    const res = await client.chat.completions.create({
  "model": "gpt-4.1-mini",
  "messages":[
            { role: "system", content: [{ type: "text", text: SYSTEMPROMPT }] },
    ...message, // if already [{role, content:[{type:"text",text:"..."}]}]
    { role: "user", content: [{ type: "text", text: userquery }] }
        ]
});
 console.log(res.choices[0].message.content)

     addMessage("assistant",res.choices[0].message.content)
    
}
export default main
