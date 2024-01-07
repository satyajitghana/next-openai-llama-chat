import { Button } from "../ui/button";
import { Input } from "../input";
import { ChatHandler } from "./chat.interface";
import VoiceInput from "./voice-input";

export default function ChatInput(
  props: Pick<
    ChatHandler,
    | "isLoading"
    | "input"
    | "onFileUpload"
    | "onFileError"
    | "handleSubmit"
    | "handleInputChange"
    | "setInput"
  >
) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    props.handleSubmit(e);
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="w-full px-4 md:max-w-4xl">
      <div className="flex w-full items-start justify-between gap-4">
        <Input
          autoFocus
          name="message"
          placeholder="Type a message"
          className="flex-1"
          value={props.input}
          onChange={props.handleInputChange}
        />
        <VoiceInput setInput={props.setInput} />
        <Button type="submit" disabled={props.isLoading}>
          Send message
        </Button>
      </div>
    </form>
  );
}
