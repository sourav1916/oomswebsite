import { io, type Socket } from 'socket.io-client';
import type { ChatMessage } from '../types/chat';

type Listener<T> = (payload: T) => void;

class ChatSocketService {
  private socket: Socket | null = null;
  private messageListeners = new Set<Listener<ChatMessage>>();
  private typingListeners = new Set<Listener<boolean>>();
  private presenceListeners = new Set<Listener<boolean>>();
  private mockTypingTimer: number | undefined;

  connect() {
    const socketUrl = import.meta.env.VITE_SOCKET_URL;

    if (socketUrl) {
      this.socket = io(socketUrl, {
        transports: ['websocket'],
        reconnection: true,
        reconnectionAttempts: 8,
        reconnectionDelay: 1200,
      });

      this.socket.on('connect', () => this.emitPresence(true));
      this.socket.on('disconnect', () => this.emitPresence(false));
      this.socket.on('chat:message', (message: ChatMessage) => this.emitMessage(message));
      this.socket.on('chat:typing', (typing: boolean) => this.emitTyping(typing));
      return;
    }

    window.setTimeout(() => this.emitPresence(true), 250);
  }

  disconnect() {
    window.clearTimeout(this.mockTypingTimer);
    this.socket?.disconnect();
    this.socket = null;
  }

  sendMessage(text: string) {
    const visitorMessage: ChatMessage = {
      id: `visitor-${Date.now()}`,
      sender: 'visitor',
      text,
      timestamp: new Date().toISOString(),
      status: 'sent',
    };

    this.emitMessage(visitorMessage);

    if (this.socket) {
      this.socket.emit('chat:message', visitorMessage);
      return;
    }

    this.emitTyping(true);
    this.mockTypingTimer = window.setTimeout(() => {
      this.emitTyping(false);
      this.emitMessage({
        id: `agent-${Date.now()}`,
        sender: 'agent',
        text: 'Thanks. A product specialist can help with implementation scope, migration, and licensing. Please share your contact email if you would like a scheduled walkthrough.',
        timestamp: new Date().toISOString(),
        status: 'sent',
      });
    }, 1100);
  }

  onMessage(listener: Listener<ChatMessage>) {
    this.messageListeners.add(listener);
    return () => this.messageListeners.delete(listener);
  }

  onTyping(listener: Listener<boolean>) {
    this.typingListeners.add(listener);
    return () => this.typingListeners.delete(listener);
  }

  onPresence(listener: Listener<boolean>) {
    this.presenceListeners.add(listener);
    return () => this.presenceListeners.delete(listener);
  }

  private emitMessage(message: ChatMessage) {
    this.messageListeners.forEach((listener) => listener(message));
  }

  private emitTyping(typing: boolean) {
    this.typingListeners.forEach((listener) => listener(typing));
  }

  private emitPresence(online: boolean) {
    this.presenceListeners.forEach((listener) => listener(online));
  }
}

export const chatSocketService = new ChatSocketService();
