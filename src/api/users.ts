import axios from "axios";
import { axiosWithAuth } from "./middleware";

export interface UserDetails extends PromoterUser {
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  profile_link: string;
  profile_picture: string;
  first_promoter_id: string;
  tier: string;
}

export const getUserInfo = async (): Promise<UserDetails | null> => {
  try {
    const url = `/user/details?email=tgphummer%40gmail.com`;
    const res = await axiosWithAuth.get(url);
    return res.data;
  } catch (err) {
    console.error("Failed to get streams due to:", err);
  }
  return null;
};

export interface TopPromoter extends PromoterUser {
  promoter_name: string;
  promoter_id: number;
  revenue_amount: string;
  clicks_count: number;
  referrals_count: number;
  customers_count: number;
}

export const getTopPromoters = async (): Promise<TopPromoter[] | null> => {
  try {
    const url = `/user/topPromoters`;
    const res = await axiosWithAuth.get(url);
    return res.data;
  } catch (err) {
    console.error("Failed to get streams due to:", err);
  }
  return null;
};

export interface PromoterProfile {
  first_name: string;
  last_name: string;
  website: string;
  company_name: string;
  phone_number: string;
  address: string;
  vat_id: string;
  country: string;
  paypal_email: string;
  avatar_url: string;
  description: string;
}

export interface PromoterCurrentOffer {
  ID: number;
  Name: string;
  Amount: number;
  DefaultPromoCode: string;
}

export interface PromoterPromotion {
  id: number;
  status: string;
  ref_id: string;
  default_ref_id: string;
  promo_code: string;
  promoter_id: number;
  campaign_id: number;
  referral_link: string;
  current_offer: PromoterCurrentOffer;
  campaign_name: string;
  leads_count: number;
}

export interface PromoterUser {
  id: number;
  status: string;
  cust_id: string;
  email: string;
  created_at: string;
  temp_password: string;
  default_promotion_id: number;
  pref: string;
  default_ref_id: string;
  note: string;
  w8_form_url: string;
  w9_form_url: string;
  parent_promoter_id: string;
  auth_token: string;
  profile: PromoterProfile;
  promotions: PromoterPromotion[];
}
export const getPromoter = async (
  promoter_id: number
): Promise<PromoterUser | null> => {
  try {
    const url = `/user/promoter/${promoter_id}`;
    const res = await axiosWithAuth.get(url);
    return res.data;
  } catch (err) {
    console.error("Failed to get streams due to:", err);
  }
  return null;
};
