import React, { useEffect, useState } from 'react';


export function MessageList () {

  const [messageList, setMessageList] = useState([])

  const placeHolder = [
    {text: 'rasskaz',
     author: 'Pushkin'
    },
    {text: 'roman',
     author: 'Bulgakov'
    },
    {text: 'tom1',
     author: 'Gorkiy'
    }
  ]

  useEffect(() => {
    setMessageList(placeHolder)
  }, [])

  return (
    <> 
      <div className="App">
         {placeHolder.map(function(item, index) {
          return <div key={index}>
                    <h3>{item.author}</h3>
                    <p>{item.text}</p>
                  </div> 
        })}
      </div>
    </>
  
  );

}

