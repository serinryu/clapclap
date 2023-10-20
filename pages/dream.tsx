import { AnimatePresence, motion } from "framer-motion";

import ClientSection from "./ClientSection";

export default function DreamPage() {

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-4 px-8 text-center">
      <h1 className="my-4 text-6xl font-bold"> Dream Board </h1>
      <ClientSection />
    </main>
  );

}