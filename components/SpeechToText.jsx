import React,{useRef, useState} from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios from "axios";

const SpeechToText = () => {
    const textBodyRef = useRef(null);
    const speechRecognitionSupported = SpeechRecognition.browserSupportsSpeechRecognition();
    const { transcript, resetTranscript } = useSpeechRecognition();
    const { listening, setListening } = useState(false);
   
    if(!speechRecognitionSupported){
        return (<div>Your browser does not support speech recognition.</div>);
    }

    const startListening = () => {
        setListening(true);
        // SpeechRecognition.startListening({
        //     continuous:true,
        // });
    };

    const stopListening = () => {
        setListening(false);
        // SpeechRecognition.stopListening()
    };

    const resetText = () => {
        stopListening();
        resetTranscript();
        textBodyRef.current.innerText = "";
    };

    const handleConversion = async () => {}

    return (
        <>
            <section>
                <div className="button-container">
                        <button type="button" 
                                style={{ "--bgColor": "blue" }}
                                onClick={startListening}
                                // disabled={listening}
                                >
                                Start/Stop
                        </button>

                        <div
                            className="words"
                            contentEditable
                            ref={textBodyRef}
                            suppressContentEditableWarning={true}>
                            {/* {transcript} */}
                        </div>
                        <div className="button-container">
                            <button type="button" > Reset</button>
                            <button type="button" > Convert to PDF</button>
                        </div> 

                </div>
            </section>
        </>
    );
}

export default SpeechToText;