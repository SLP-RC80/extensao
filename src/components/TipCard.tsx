import { type LucideIcon } from "lucide-react";

interface TipCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant: "environment" | "security" | "warning";
}

const variantStyles = {
  environment: "border-l-environment bg-environment-light",
  security: "border-l-security bg-security-light",
  warning: "border-l-warning bg-warning-light",
};

const iconStyles = {
  environment: "text-environment",
  security: "text-security",
  warning: "text-warning",
};

const TipCard = ({ icon: Icon, title, description, variant }: TipCardProps) => (
  <div
    className={`animate-fade-in rounded-lg border border-border border-l-4 p-6 shadow-sm transition-shadow hover:shadow-md ${variantStyles[variant]}`}
  >
    <div className="mb-3 flex items-center gap-3">
      <Icon className={`h-7 w-7 flex-shrink-0 ${iconStyles[variant]}`} />
      <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">{title}</h3>
    </div>
    <p className="font-body text-base leading-relaxed text-foreground/80 sm:text-lg">{description}</p>
  </div>
);

export default TipCard;
