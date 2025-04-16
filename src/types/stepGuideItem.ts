export interface SubListItem {
  id: string;
  description: string;
}

export interface stepGuideItem {
  id: number;
  title: string;
  img: string;
  description: string;
  subTitle?: string;
  subList?: SubListItem[];
}
