import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useToastStore } from ".";

const Toasts = () => {
  const { toasts } = useToastStore();

  return (
    <AnimatePresence>
      {toasts.length !== 0 && (
        <motion.ul
          layout="position"
          className={`fixed bottom-0 mb-4 flex h-auto w-96 flex-grow flex-col gap-2 self-center
      `}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <AnimatePresence>
            {toasts.map((t) => (
              <motion.li
                key={t.id}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="flex-initial rounded bg-blue-300 p-4"
              >
                <p className="flex items-center">
                  &#10024; <span className="font-bold">{t.name}</span> &#10024;
                  was added to the cart
                </p>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default Toasts;
