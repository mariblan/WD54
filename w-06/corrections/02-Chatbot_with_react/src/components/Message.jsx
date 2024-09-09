import ReactMarkdown from 'react-markdown';  
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'; 

function Message({message}) {

  return (
    <div style={{ marginBottom: '12px' }}>  
    <strong>{message.role}:</strong>  
    <ReactMarkdown  
      components={{  
        code({ inline, className, children, ...props }) {  
          const match = /language-(\w+)/.exec(className || '');  
          return !inline && match ? (  
            <SyntaxHighlighter  
              style={dark}  
              language={match[1]}  
              PreTag="div"  
              {...props}  
            >  
              {children}  
            </SyntaxHighlighter>  
          ) : (  
            <code className={className} {...props}>  
              {children}  
            </code>  
          );  
        },  
      }}  
    >  
      {message.text}  
    </ReactMarkdown>  
    <p><i>{message.date}</i></p>
  </div>  
  )
}

export default Message;