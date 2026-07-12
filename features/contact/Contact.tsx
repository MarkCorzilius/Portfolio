"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/i18n/useTranslation";
import PrimaryButton from "@/components/ui/PrimaryButton";

type ContactKey =
  | "contactTitle"
  | "contactName"
  | "contactEmail"
  | "contactMessage"
  | "contactConsentPrefix"
  | "contactConsentSuffix"
  | "contactSubmit"
  | "footerPrivacyPolicy";

type ModalState = {
  open: boolean;
  success: boolean;
};

export default function Contact() {
  const { t } = useTranslation();
  const contact = t as Record<ContactKey, string>;
  const [modal, setModal] = useState<ModalState>({ open: false, success: false });
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!modal.open) return;

    closeTimerRef.current = window.setTimeout(() => {
      setModal({ open: false, success: false });
    }, 3000);

    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, [modal.open]);

  const closeModal = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }

    setModal({ open: false, success: false });
  };

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/sendMail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          message: String(data.get("message") ?? ""),
        }),
      });

      setModal({ open: true, success: response.ok });

      if (response.ok) {
        form.reset();
      }
    } catch {
      setModal({ open: true, success: false });
    }
  };

  return (
    <>
      <section id="contact" className="bg-background py-12 md:py-20">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-14 px-4 sm:px-8 md:px-16 lg:flex-row lg:items-start lg:gap-24">
          <div className="w-full lg:w-1/3">
            <h2 className="font-serif text-2xl font-bold italic text-black md:text-4xl">{contact.contactTitle}</h2>

            <div className="mt-6 mb-8 h-[2px] w-20 bg-black" />

            <p className="max-w-sm font-serif leading-relaxed text-neutral-600">
              {t.contactMeText}
            </p>

            <div className="mt-10 flex flex-col gap-4 font-serif">
              <a href="mailto:markcorzilius@gmail.com" className="text-black transition hover:underline transition-all duration-300">
                markcorzilius@gmail.com
              </a>

              <a href="tel:+491728610088" className="text-black transition hover:underline transition-all duration-300">
                +49 172 8610088
              </a>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="flex w-full flex-1 flex-col gap-6 font-serif">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-black">
                {contact.contactName}
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                className="rounded-full border border-black bg-background px-5 py-3 text-black outline-none transition focus:bg-neutral-50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-black">
                {contact.contactEmail}
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-full border border-black bg-background px-5 py-3 text-black outline-none transition focus:bg-neutral-50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-black">
                {contact.contactMessage}
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="min-h-44 resize-y rounded-[1.5rem] border border-black bg-background px-5 py-4 text-black outline-none transition focus:bg-neutral-50"
              />
            </div>

            <label htmlFor="privacy-consent" className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-black">
              <input id="privacy-consent" type="checkbox" required className="peer sr-only" />

              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border border-black bg-background transition peer-focus-visible:ring-2 peer-focus-visible:ring-black peer-checked:bg-black">
                <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 opacity-0 transition peer-checked:opacity-100" aria-hidden="true">
                  <path d="M3 8L6.2 11.2L13 4.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>

              <span>
                {contact.contactConsentPrefix}{" "}
                <Link href="/privacy-policy" className="underline decoration-black underline-offset-4 transition hover:text-neutral-500">
                  {contact.footerPrivacyPolicy}
                </Link>{" "}
                {contact.contactConsentSuffix}
              </span>
            </label>

            <div className="pt-2">
              <PrimaryButton text={contact.contactSubmit} />
            </div>
          </form>
        </div>
      </section>

      {modal.open ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4" onClick={closeModal} role="presentation">
          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-sm rounded-[2rem] border border-black bg-background p-6 font-serif shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close dialog"
              onClick={closeModal}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-black text-lg text-black transition hover:bg-black hover:text-white"
            >
              ×
            </button>

            <p className="pr-10 text-2xl font-bold text-black">{modal.success ? "Sent" : "Failed"}</p>

            <p className="mt-3 text-sm leading-6 text-neutral-600">
              {modal.success ? "Your message was sent successfully." : "Message sending failed. Please try again."}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
