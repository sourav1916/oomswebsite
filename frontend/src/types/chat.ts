export interface ChatMessage {
  id: string;
  sender: 'visitor' | 'agent' | 'system';
  text: string;
  timestamp: string;
  status?: 'sending' | 'sent' | 'failed';
}

export interface ChatEventMap {
  connect: () => void;
  disconnect: () => void;
  message: (message: ChatMessage) => void;
  typing: (typing: boolean) => void;
  presence: (online: boolean) => void;
}
