"use client";

import BackButton from "./BackButton";
import Header from "./Header";
import Social from "./Social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
  secondLabel?: string;
}

function CardWrapper({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  secondLabel,
  showSocial,
}: CardWrapperProps) {
  return (
    <div className="flex h-full w-full flex-col items-center gap-5 ">
      {/* Add padding here */}
      <Header secondLabel={secondLabel} label={headerLabel} />
      {children}
      {showSocial && <Social />}
      <BackButton
        backButtonHref={backButtonHref}
        backButtonLabel={backButtonLabel}
      />
    </div>
  );
}

export default CardWrapper;
