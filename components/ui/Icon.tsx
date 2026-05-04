import {
  Activity,
  BarChart3,
  Building2,
  Cloud,
  Cpu,
  CreditCard,
  Droplets,
  Globe,
  GraduationCap,
  Headphones,
  Layers,
  Leaf,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Activity,
  BarChart3,
  Building2,
  Cloud,
  Cpu,
  CreditCard,
  Droplets,
  Globe,
  GraduationCap,
  Headphones,
  Layers,
  Leaf,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Wrench,
  Zap,
};

export function Icon({
  name,
  className,
}: {
  name?: string;
  className?: string;
}) {
  const C = (name && map[name]) || Layers;
  return <C className={className} />;
}
