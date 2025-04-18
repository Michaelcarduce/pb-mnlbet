export interface NewsItem {
  id: number;
  imageUrl: string;
  title: string;
  subTitle: string;
  link: string;
  alt: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    imageUrl: "/banners/promotionBanner1.webp",
    title: "Sample News Title",
    subTitle:
      "Sample News Sub Title Sample News Sub Title Sample News Sub Title Sample News Sub Title",
    alt: "Panalobet",
    link: "/",
  },
  {
    id: 2,
    imageUrl: "/banners/promotionBanner1.webp",
    title: "Sample News Title",
    subTitle:
      "Sample News Sub Title Sample News Sub Title Sample News Sub Title Sample News Sub Title",
    alt: "Panalobet",
    link: "/",
  },
];
