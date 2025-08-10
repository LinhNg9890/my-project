// types/Message.ts
export type MessageType = 'text' | 'image' | 'chart' | 'code';

export interface Message {
  id: string;
  role: 'user' | 'bot';
  type: MessageType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
}
