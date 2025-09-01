import React, { useState } from "react";
import { Clipboard, Check, ExternalLink, Mail } from "lucide-react";
import { motion } from "motion/react";

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
          <motion.a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="text-gray-700 hover:text-black" />
          </motion.a>
        )}
        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink className="text-gray-700 hover:text-black" />
          </motion.a>
        )}
        <motion.button
          onClick={copyText}
          aria-label="Copy to clipboard"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isCopied ? (
            <Check />
          ) : (
            <Clipboard className="text-gray-700 hover:text-black" />
          )}
        </motion.button>
      </div>
    </div>
  );
};
export default ContactButton;
