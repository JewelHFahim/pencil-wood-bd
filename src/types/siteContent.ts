export interface SiteContent {
  id: 1;
  copyright: string;
  copyright_year: string;
  fab_icon: string;
  logo: string;
  secondary_logo: string;
  site_slogan: string;
  title: string;
}

export interface SiteContentApiResponse {
  data: SiteContent;
  status: boolean;
}

export interface SiteConatctInfos {
  id: number;
  phone: string;
  secondary_phone: string;
  whatspp_number: string;
  email: string;
  location: string;
}

export interface SiteConactApiRes {
  status: boolean;
  data: SiteConatctInfos;
}

export interface FooterLinks {
  id: number;
  name: string;
  url: string;
  is_active: boolean;
}

export interface FooterLinksApis {
  status: boolean;
  count: number;
  data: FooterLinks[];
}
