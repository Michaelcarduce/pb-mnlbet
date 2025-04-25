interface ListItem {
  id: string;
  description: string;
}

interface ContentItem {
  id: string;
  class: string;
  description?: string | ListItem[];
  imageUrl?: string;
}
export interface newsCardGridItem {
  id: number;
  title: string;
  subTitle?: string;
  slug?: string;
  buttonText?: string;
  link?: string;
  imageUrl: string;
  alt: string;
  author?: string;
  date?: string;
  content: ContentItem[];
}
