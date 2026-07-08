"use client";

import Link from "next/link";
import { useTranslation } from "@/i18n/useTranslation";

type PrivacyPolicyKey =
  | "privacyPolicyTitle"
  | "privacyPolicyBack"
  | "privacyPolicyIntro"
  | "privacyPolicyLastUpdated"
  | "privacyPolicySectionController"
  | "privacyPolicyControllerText"
  | "privacyPolicySectionCollected"
  | "privacyPolicyCollectedText"
  | "privacyPolicySectionPurpose"
  | "privacyPolicyPurposeText"
  | "privacyPolicySectionRetention"
  | "privacyPolicyRetentionText"
  | "privacyPolicySectionHosting"
  | "privacyPolicyHostingText"
  | "privacyPolicySectionRights"
  | "privacyPolicyRightsText"
  | "privacyPolicySectionSecurity"
  | "privacyPolicySecurityText"
  | "privacyPolicySectionChanges"
  | "privacyPolicyChangesText";

const sectionKeys = [
  ["privacyPolicySectionController", "privacyPolicyControllerText"],
  ["privacyPolicySectionCollected", "privacyPolicyCollectedText"],
  ["privacyPolicySectionPurpose", "privacyPolicyPurposeText"],
  ["privacyPolicySectionRetention", "privacyPolicyRetentionText"],
  ["privacyPolicySectionHosting", "privacyPolicyHostingText"],
  ["privacyPolicySectionRights", "privacyPolicyRightsText"],
  ["privacyPolicySectionSecurity", "privacyPolicySecurityText"],
  ["privacyPolicySectionChanges", "privacyPolicyChangesText"],
] as const satisfies ReadonlyArray<readonly [PrivacyPolicyKey, PrivacyPolicyKey]>;

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();
  const policy = t as Record<PrivacyPolicyKey, string>;

  return (
    <section className="bg-surface py-24 md:py-32 flex justify-center">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-16">
        <div className="mx-auto w-full max-w-4xl rounded-[2rem] border border-neutral-200 bg-background p-6 shadow-sm sm:p-8 md:p-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-black transition hover:text-neutral-600">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {policy.privacyPolicyBack}
          </Link>

          <h1 className="mt-6 text-3xl font-serif italic font-bold text-black md:text-4xl">{policy.privacyPolicyTitle}</h1>

          <div className="w-20 h-[2px] bg-black mt-6 mb-8" />

          <p className="max-w-3xl text-sm leading-7 text-neutral-700 sm:text-base">{policy.privacyPolicyIntro}</p>
          <p className="mt-3 text-sm text-neutral-500">{policy.privacyPolicyLastUpdated}</p>

          <div className="mt-10 space-y-8">
            {sectionKeys.map(([titleKey, textKey]) => (
              <article key={titleKey} className="border-t border-neutral-200 pt-6 first:border-t-0 first:pt-0">
                <h2 className="text-xl font-serif font-semibold text-black">{policy[titleKey]}</h2>
                <p className="mt-3 text-sm leading-7 text-neutral-700 sm:text-base">{policy[textKey]}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
