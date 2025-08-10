import { Message } from '../../types/Message';
import Image from 'next/image';
import Chart from './Chart'; // You'll build this
import CodeBlock from './CodeBlock'; // Optional

type Props = {
  message: Message;
};

export default function MessageRenderer({ message }: Props) {
  const { role, type, content } = message;

  const isUser = role === 'user';
  const baseStyle = isUser ? 'text-right' : 'text-left';

  return (
    <div className={`${baseStyle} my-2`}>
      {type === 'text' && <p className="bg-gray-200 inline-block p-2 rounded">{content}</p>}
      {type === 'image' && (
        <div className="inline-block p-2">
          <img src={content} alt="bot image" className="rounded max-w-xs" />
        </div>
      )}
      {type === 'chart' && <Chart data={content} />}
      {type === 'code' && <CodeBlock code={content} />}
    </div>
  );
}
