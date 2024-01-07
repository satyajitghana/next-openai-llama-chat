"use client";

import { useChat } from "ai/react";
import ChatInput from "./chat-input";
import ChatMessages from "./chat-messages";

export default function ChatSection() {
  const {
    messages,
    input,
    isLoading,
    handleSubmit,
    handleInputChange,
    setInput,
  } = useChat();

  return (
    <>
      <ChatMessages messages={messages} isLoading={isLoading} />
      <ChatInput
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        isLoading={isLoading}
      />
    </>
  );
}
