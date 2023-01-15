export interface ItemType {
  id: number;
  description: string;
  category: string;
  image: string;
  price: number;
  title: string;
  rating: {
    count: number;
    rate: number;
  };
  amount: number;
  quantity: number;
}
