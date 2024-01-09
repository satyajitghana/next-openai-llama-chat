import { useEffect, useRef, useState } from "react";

export default function useSpeech() {
  const [text, setText] = useState("");
  const [speaking, setSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  const recognitionRef = useRef();

  function speechRecognition() {
    // @ts-ignore
    recognitionRef.current?.start();
    setSpeaking(true);
  }

  useEffect(() => {
    const isSpeechSupported = "webkitSpeechRecognition" in window;
    setIsSupported(isSpeechSupported);
  }, []);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      setText(text);
    };

    recognition.onerror = (event: any) => {
      console.log(`Error occurred in recognition: ${event.error}`);
    };

    recognition.onend = function () {
      setSpeaking(false);
    };

    return () => {
      setText("");
      recognition?.stop();
    };
  }, []);

  return {
    text,
    speechRecognition,
    speaking,
    isSupported,
  };
}
