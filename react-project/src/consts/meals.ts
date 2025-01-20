type Meal = {
    name: string;
    price: number;
    information: string;
    backgroundColor: string;
    textColor: string;
  };
  
  const meals: Meal[] = [
    {
      name: "Green Goddess Chicken Salad",
      price: 32,
      information:
        "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery. ",
      backgroundColor: "#EAFFE2",
      textColor: "#54BF29",
    },
    {
      name: "Asian Cucumber Salad",
      price: 35,
      information:
        "Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!",
      backgroundColor: "#F3FFDD",
      textColor: "#9BC604",
    },
  ];
  
export default meals;