export default function MessageTextBlock(props) {

    return props.message.map((message, index) => 
        <div key={index}>
        <p>Автор: {message.author}</p>
        <p>Сообщение: {message.text}</p>
        </div>
    );
}