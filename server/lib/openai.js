import { OpenAI } from "openai";
import { config } from "dotenv";
import fs from 'fs/promises';
config();
const client=new OpenAI()
const systemPrompt = await fs.readFile('promptfile/system_prompt.txt', 'utf-8');
const messages=[
    {"role":"system",
        "content":systemPrompt
    },
    {"role":"user",
        "content":"Hello ji sir aap kaise hain"
    }
]
async function main() {
    const response = await client.chat.completions.create({
  "model": "gpt-4.1-mini",
  "messages":messages
});
console.log(response.choices[0].message.content)
messages.push(response.choices[0].message.content)
    
}
main()