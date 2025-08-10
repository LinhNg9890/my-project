import MessageRenderer from '../messages/MessageRenderer';
import { Message } from '../../types/Message';
import ChatInput from './ChatInput';

const sampleMessages: Message[] = [
  { id: '1', role: 'bot', type: 'text', content: 'Hello!' },
  { id: '2', role: 'bot', type: 'image', content: 'ahihi' },
  {
    id: '3',
    role: 'bot',
    type: 'chart',
    content: {
      labels: ['Jan', 'Feb', 'Mar'],
      datasets: [{ label: 'Sales', data: [10, 20, 15], backgroundColor: 'blue' }],
    },
  },
];

export default function ChatWindow() {
  return (
    <div className="flex flex-col flex-1 bg-white p-6 overflow-y-auto space-y-4">
      {sampleMessages.map((msg) => (
        <MessageRenderer key={msg.id} message={msg} />
      ))}
      <ChatInput />
    </div>
  );
}
