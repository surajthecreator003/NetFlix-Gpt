import OpenAI from 'openai';
import { OPENAI_KEY } from './constant';


//its kind of ike authorizing
const openai = new OpenAI({
    
  apiKey: OPENAI_KEY, 
  dangerouslyAllowBrowser:true

});


export default openai;
