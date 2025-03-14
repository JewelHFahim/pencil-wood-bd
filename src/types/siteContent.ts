export interface SiteContent {
  copyright: string;
  copyright_year: string;
  fab_icon: string;
  id: 1;
  logo: string;
  secondary_logo: string;
  site_slogan: string;
  title: string;
}

export interface SiteContentApiResponse {
  data: SiteContent;
  status: boolean;
}
