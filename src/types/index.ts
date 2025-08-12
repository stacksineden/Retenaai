export type IUpdateUser = {
  userId: string;
  name: string;
  imageId: string;
  imageUrl: URL | string;
  file: File[];
};

export type IUser = {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  stage: string;
  cohort: string;
  program: string;
  programId: string;
};

export type ISubscription = {
  is_subscribed: boolean;
  subscription_start_date: string;
  amount: number;
  id: string;
  subscription_type: string;
};

export type INewUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  country: string;
  state: string;
};

export type IUpdateCredit = {
  userId: string;
  balance: number;
};

export type IUpdateStage = {
  stage: string;
  program: string;
  ProgamId: string;
  userId: string;
}

export type FluxStylesData = {
  title: string;
  text: string;
  images: string[];
  query_slug: string;
  url?: string;
};

export type AppStylesData = {
  name: string;
  training_status: string;
  data_created: string;
  shoot_type: string;
  api_url: string;
  image: string;
};

export type TemplateObj = {
  image: string;
  prompt: string;
};
export type GalleryStylesData = {
  name: string;
  slug: string;
  category: string;
  images: string[];
  text: string;
  templates: TemplateObj[];
  is_trending: boolean;
};

export type ProgramTypeData = {
  name: string;
  description: string;
  image: string;
  linkText: string;
  href: string;
  slug: string;
  disabled: boolean;
};

export type ProductDemoCardData = {
  name: string;
  trigger_word: string;
  training_dataset: string[];
  image_generated: string[];
  prompt: string;
};

export type TrainingDatasetResponse = {
  name: string;
  date_created: string;
  image: string;
  status: string;
};

export type TrainingPayload = {
  userId: string;
  prompt: string;
  PrimaryStyle: string;
  secondaryStyle: string;
  images: string[];
  triggerWord: string;
  isPublic: boolean;
  trainingStatus: string;
  txRef: string;
};

export type ContractPayload = {
  subject: string;
  email: string;
  AdditionalInfo: string;
  BusinessType?: string;
  Budget: string;
};

export type PhotoshootPlan = {
  id: string;
  plan: string;
  feature: string[];
  base_price: string;
  price_in_naira: string;
  discount_base_price?: string;
  dicount_price_in_naira?: string;
  credits?: number;
  is_promo?: boolean;
};

export type ImageGenFluxProRequest = {
  prompt: string;
  aspect_ratio: string;
  output_format: string;
};

export type ImageGenFluxUltraRequest = {
  prompt: string;
  aspect_ratio: string;
  output_format: string;
  raw: boolean;
};

export type ImageGenFluxChibskyRequest = {
  prompt: string;
  aspect_ratio: string;
  output_format: string;
  num_outputs: number;
};

export type ImageUpscalingRequest = {
  image: string;
};

export type OpenAIRequest = {
  prompt: string;
};

export type CreateGenerations = {
  prompt: string;
  catergory: string;
  url: string;
  creator: string;
};
