export const initialState = {
    profile: {
      name: 'Aleksey',
      visible: true,
    },
    
    chats: {
      1: {
      name: "Chat1",
      messages: [{ text: "Сообщение 1 чата", author: "Robot" }],
      },
  
      2: {
      name: "Chat2",
      messages: [{ text: "Сообщение 2 чата", author: "Me" }],
      },
  },

    robotMessage: {
            // Author: 'Robot',
            // Message: 'Your message is received.',
            Author: '',
            Message: '',
    },

}