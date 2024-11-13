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
  creditBalance:number
};

export type ISubscription = {
  is_subscribed: boolean;
  subscription_start_date: string;
  amount: number;
  id: string;
  subscription_type: string;
};

export type INewUser = {
  name: string;
  email: string;
  password: string;
};

export type IUpdateCredit = {
  userId:string;
  balance:number;
}

export type FluxStylesData = {
  title: string;
  text: string;
  images: string[];
  query_slug: string;
  url?:string;
};

export type AppStylesData = {
  title: string;
  text: string;
  images: string[];
  query_slug: string;
  url:string;
}

export type GalleryStylesData = {
  title: string;
  text: string;
  images: string[];
  query_slug: string;
}

export type TrainingDatasetResponse = {
  name: string;
  date_created:string;
  image: string;
  status: string;
}

export type TrainingPayload = {
  userId:string;
  prompt:string;
  PrimaryStyle:string;
  secondaryStyle:string;
  images:string[];
  triggerWord:string;
  isPublic:boolean;
  trainingStatus:string;
  txRef:string;
}

export type ContractPayload = {
  subject:string;
  email:string;
  AdditionalInfo:string;
  BusinessType:string;
  Budget:string
}

export type PhotoshootPlan = {
  id: string;
  plan: string;
  feature: string[];
  base_price: string;
  price_in_naira: string;
  credits?:number
};

export type ImageGenFluxProRequest = {
   prompt:string;
   aspect_ratio:string;
   output_format:string;
}

export type ImageGenFluxUltraRequest = {
  prompt: string;
  aspect_ratio: string;
  output_format: string;
  raw: boolean;
}

export type ImageGenFluxChibskyRequest = {
  prompt:string;
  aspect_ratio:string;
   output_format:string;
  num_outputs: number;
}

export type ImageUpscalingRequest = {
  image:string;
}

export type OpenAIRequest = {
  prompt:string
}

export type CreateGenerations = {
  prompt:string;
  catergory:string;
  url:string;
  creator:string;
}