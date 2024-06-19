export type Inputs = {
  name: string;
  email: string;
  phone: number;
  instagram?: string;
  tiktok?: string;
  twitter?: string;
};
export type buttonType = {
  type?: "submit" | "reset";
  color?: string;
  text: string;
  onClick?: () => void;
};

export type customField = {
  name: string;
  is_required: boolean;
  question: string;
  type: string;
};
export type socialType = "instagram" | "tiktok" | "twitter";
export type FieldType = "name" | "email" | "phone";
