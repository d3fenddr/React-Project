export type Meal = {
    id: number;
    name: string;
    description: string;
    price: number;
    category: "breakfast" | "lunch" | "dinner";
    imageUrl: string;
  };  