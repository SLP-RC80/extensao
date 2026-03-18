import { type LucideIcon } from "lucide-react";

interface TipCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant: "environment" | "security" | "warning";
  image?: string;
  imageAlt?: string;
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

const TipCard = ({ icon: Icon, title, description, variant, image, imageAlt }: TipCardProps) => (
  <div
    className={`animate-fade-in overflow-hidden rounded-lg border border-border border-l-4 shadow-sm transition-shadow hover:shadow-md ${variantStyles[variant]}`}
  >
    {image && (
      <div className="relative h-48 w-full overflow-hidden sm:h-56">
        <img
          src={image}
          alt={imageAlt || title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
    )}
    <div className="p-6">
      <div className="mb-3 flex items-center gap-3">
        <Icon className={`h-7 w-7 flex-shrink-0 ${iconStyles[variant]}`} />
        <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">{title}</h3>
      </div>
      <p className="font-body text-base leading-relaxed text-foreground/80 sm:text-lg">{description}</p>
    </div>
  </div>
);

export default TipCard;
