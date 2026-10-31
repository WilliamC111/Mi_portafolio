import type { Language } from "@/lib/i18n";

export function Wordmark({ homeLabel }: { homeLabel: string }) {
  return (
    <a className="wordmark" href="#inicio" aria-label={homeLabel}>
      W<span>.</span>
    </a>
  );
}

export function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={diagonal ? "arrow-icon arrow-diagonal" : "arrow-icon"}
    >
      <path
        d="M3.75 9h10.5m0 0L9 3.75M14.25 9 9 14.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProjectVisual({
  visual,
  label,
  number,
  projectLabel,
}: {
  visual: string;
  label: string;
  number: string;
  projectLabel: string;
}) {
  return (
    <div className={`project-visual visual-${visual}`} data-project-visual>
      <span className="visual-index">
        {projectLabel} / {number}
      </span>
      <div className="visual-art" aria-hidden="true">
        {visual === "boutique" && (
          <div className="boutique-art">
            <span className="boutique-orbit orbit-one" />
            <span className="boutique-orbit orbit-two" />
            <span className="boutique-mark">E&amp;S</span>
            <span className="boutique-submark">BOUTIQUE</span>
            <span className="boutique-spark">✳</span>
          </div>
        )}
        {visual === "agro" && (
          <div className="agro-art">
            <span className="agro-sun" />
            <span className="agro-hill hill-back" />
            <span className="agro-hill hill-front" />
            <span className="agro-stem stem-one" />
            <span className="agro-stem stem-two" />
            <span className="agro-stem stem-three" />
          </div>
        )}
        {visual === "pet" && (
          <div className="pet-art">
            <span className="pet-circle">P</span>
            <span className="pet-dot dot-one" />
            <span className="pet-dot dot-two" />
            <span className="pet-dot dot-three" />
            <span className="pet-dot dot-four" />
            <span className="pet-cross">+</span>
          </div>
        )}
        {visual === "data" && (
          <div className="data-art">
            <span className="data-grid" />
            <span className="data-line line-one" />
            <span className="data-line line-two" />
            <span className="data-node node-one" />
            <span className="data-node node-two" />
            <span className="data-node node-three" />
          </div>
        )}
        {visual === "chatbot" && (
          <div className="chatbot-art">
            <span className="chatbot-window">
              <span className="chatbot-dots">● ● ●</span>
              <span className="chatbot-message message-user" />
              <span className="chatbot-message message-bot" />
              <span className="chatbot-message message-user short" />
              <span className="chatbot-cursor">_</span>
            </span>
            <span className="chatbot-orbit" />
          </div>
        )}
        {visual === "cinema" && (
          <div className="cinema-art">
            <span className="cinema-ticket">
              <span className="ticket-slit" />
              <span className="ticket-star">✳</span>
              <span className="ticket-title">CINE</span>
              <span className="ticket-meta">FILM · SEAT · TIME</span>
            </span>
          </div>
        )}
      </div>
      <span className="visual-label">{label}</span>
      <span className="visual-corner" aria-hidden="true">
        <ArrowIcon diagonal />
      </span>
    </div>
  );
}

export function mailComposerUrl(email: string, language: Language) {
  const subject =
    language === "es"
      ? "Contacto profesional — William Cely"
      : "Professional inquiry — William Cely";
  const params = new URLSearchParams({ view: "cm", fs: "1", to: email, su: subject });

  return `https://mail.google.com/mail/?${params.toString()}`;
}
