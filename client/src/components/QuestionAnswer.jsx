
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


function extractCodeFromString(message){
 if(message.includes("```")){
  const blocks=message.split("```")
  return blocks
 }
}

function isCodeBlock(str){
  if(
    str.includes("=") || str.includes(";") || str.includes("[") || str.includes("]") || str.includes("}") || str.includes("{") || str.includes("#") || str.includes("//")
  ){
  return true
  }
  return false
}

const QuestionAnswer = ({ responses }) => {
  const question = responses?.question?.[0]?.content;
  const answer = responses?.answer?.[0]?.message.content;
  const messageBlocks=extractCodeFromString(answer)

  return (
    <div className="mx-20 max-w-3xl flex flex-col items-start">
      <div className="mt-4 flex mb-10 w-full">
        <div className="flex text-white gap-7 w-full">
          <img className="w-8 h-8" src="./user.jpg" alt="user" />
          <p className="overflow-hidden text-ellipsis max-w-full">{question}</p>
        </div>
      </div>
      <div className="flex flex-col w-full overflow-auto">
        <div className="flex flex-col text-white  gap-7 w-full">
          <img className="w-8 h-8" src="./chatgpt-icon.png" alt="chatgpt" />
          <div className='max-h-72'>
          {!messageBlocks && (<p className="overflow-auto hover:overflow-scroll text-ellipsis max-w-full">{answer}</p>)}
          {messageBlocks && messageBlocks.length && messageBlocks.map((block)=>isCodeBlock(block)?<SyntaxHighlighter language="javascript" style={dark} className="">{block}</SyntaxHighlighter>:<p className="overflow-hidden text-ellipsis max-w-full">{block}</p>)}
          </div>
        </div>
      </div>
    </div> 
  );
};

export default QuestionAnswer;
