"use client";
import useSpeech from "@/hooks/use-speech";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction, useEffect } from "react";

interface VoiceInputProps {
  setInput: Dispatch<SetStateAction<string>>;
}
export default function VoiceInput(props: VoiceInputProps) {
  const { setInput } = props;
  const { speechRecognition, text, speaking, isSupported } = useSpeech();

  useEffect(() => {
    setInput(text);
  }, [text, setInput]);
  return (
    <>
      <Button
        disabled={!isSupported}
        variant={speaking ? "destructive" : "secondary"}
        onClick={speechRecognition}
        size={"icon"}
        type="button"
        className={speaking ? "animate-pulse" : "animate-none"}
      >
        <svg
          data-slot="icon"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
          ></path>
        </svg>
      </Button>
    </>
  );
}
