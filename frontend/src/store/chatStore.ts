import { create } from 'zustand';
import type { ChatMessage } from '../types/chat';

interface ChatState {
  isOpen: boolean;
  isOnline: boolean;
  isTyping: boolean;
  unreadCount: number;
  messages: ChatMessage[];
  toggleOpen: () => void;
  setOpen: (isOpen: boolean) => void;
  setOnline: (isOnline: boolean) => void;
  setTyping: (isTyping: boolean) => void;
  addMessage: (message: ChatMessage) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  isOpen: false,
  isOnline: true,
  isTyping: false,
  unreadCount: 0,
  messages: [
    {
      id: 'welcome',
      sender: 'agent',
      text: 'Hello. Share your team size and primary workflow, and we will guide you to the right OOMS setup.',
      timestamp: new Date().toISOString(),
      status: 'sent',
    },
  ],
  toggleOpen: () =>
    set((state) => ({
      isOpen: !state.isOpen,
      unreadCount: !state.isOpen ? 0 : state.unreadCount,
    })),
  setOpen: (isOpen) =>
    set((state) => ({
      isOpen,
      unreadCount: isOpen ? 0 : state.unreadCount,
    })),
  setOnline: (isOnline) => set({ isOnline }),
  setTyping: (isTyping) => set({ isTyping }),
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
      unreadCount: state.isOpen || message.sender === 'visitor' ? state.unreadCount : state.unreadCount + 1,
    })),
}));
