import React, { useState } from "react";
import { Clipboard, Check, ExternalLink, Mail } from "lucide-react";

const ContactButton = ({
  text,
  link,
  email
}: {
  text: string;
  link?: string;
  email?: string;
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyText = () => {
    navigator.clipboard.writeText(link || text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };
  return (
    <div className="text-lg inline-flex lg:flex-row md:flex-col items-center space-x-2 px-auto justify-center my-4">
      <p className="my-0 text-gray-700">{text} </p>
      <div className="flex flex-row space-x-2">
        {email && (
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            <Mail className="text-gray-700 hover:text-black" />
          </a>
        )}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="text-gray-700 hover:text-black" />
          </a>
        )}
        <button onClick={copyText} aria-label="Copy to clipboard">
          {isCopied ? (
            <Check />
          ) : (
            <Clipboard className="text-gray-700 hover:text-black" />
          )}
        </button>
      </div>
    </div>
  );
};
export default ContactButton;
