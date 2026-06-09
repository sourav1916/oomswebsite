export interface PricingFeature {
  text: string;
  included: boolean;
  tooltip?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  duration: string;
  durationLabel: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}
