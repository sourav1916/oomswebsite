import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { chatSocketService } from "../services/chatSocketService";
import { useChatStore } from "../store/chatStore";

export const LiveChatWidget = () => {
  const [draft, setDraft] = useState("");
  const panelRef = useRef(null);
  const {
    isOpen,
    isOnline,
    isTyping,
    unreadCount,
    messages,
    toggleOpen,
    setOnline,
    setTyping,
    addMessage,
  } = useChatStore();

  useEffect(() => {
    chatSocketService.connect();
    const offMessage = chatSocketService.onMessage(addMessage);
    const offTyping = chatSocketService.onTyping(setTyping);
    const offPresence = chatSocketService.onPresence(setOnline);

    return () => {
      offMessage();
      offTyping();
      offPresence();
      chatSocketService.disconnect();
    };
  }, [addMessage, setOnline, setTyping]);

  useEffect(() => {
    panelRef.current?.scrollTo({
      top: panelRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    chatSocketService.sendMessage(text);
    setDraft("");
  };

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            className="mb-3 w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950"
            aria-label="Live chat"
          >
            <header className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-slate-800">
              <div>
                <p className="font-heading text-sm font-bold text-foreground">
                  OOMS Advisory Desk
                </p>
                <p className="text-xs text-muted-foreground">
                  <span
                    className={isOnline ? "text-emerald-500" : "text-amber-500"}
                  >
                    {isOnline ? "Online" : "Offline"}
                  </span>{" "}
                  for implementation questions
                </p>
              </div>
              <button
                type="button"
                onClick={toggleOpen}
                aria-label="Close live chat"
                className="rounded-full p-2 text-muted-foreground transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:hover:bg-slate-900"
              >
                <X className="h-4 w-4" />
              </button>
            </header>

            <div
              ref={panelRef}
              className="max-h-80 space-y-3 overflow-y-auto px-4 py-4"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "visitor" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      message.sender === "visitor"
                        ? "bg-primary-600 text-white"
                        : "bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-200"
                    }`}
                  >
                    <p>{message.text}</p>
                    <time className="mt-1 block text-[10px] opacity-70">
                      {new Intl.DateTimeFormat("en-IN", {
                        hour: "2-digit",
                        minute: "2-digit",
                      }).format(new Date(message.timestamp))}
                    </time>
                  </div>
                </div>
              ))}
              {isTyping && (
                <p className="text-xs font-medium text-muted-foreground">
                  Advisor is typing...
                </p>
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex gap-2 border-t border-slate-100 p-3 dark:border-slate-800"
            >
              <input
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Type your question"
                aria-label="Chat message"
                className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
              />

              <button
                type="submit"
                aria-label="Send chat message"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={toggleOpen}
        aria-label="Open live chat"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-white shadow-xl transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-white dark:text-slate-950"
      >
        <MessageCircle className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">
            {unreadCount}
          </span>
        )}
      </button>
    </div>
  );
};
