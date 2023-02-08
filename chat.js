import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: '',
})
const openai = new OpenAIApi(configuration)

const response = await openai.createCompletion({
  model: 'text-davinci-003',
  prompt: '什么是javascript',
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
})

console.log(response.data)
