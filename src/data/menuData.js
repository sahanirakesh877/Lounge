import milktea from '../../public/img/Hot Bevarage/MilkTea.jpeg'


const menudata = [
  // hot Bevarage start
  {
    id: 1,
    title: "Milk Tea",
    category: "Hot Beverages",
    price: 50,
    image: '/img/HotBevarage/MilkTea.jpeg',
  },
  {
    id: 2,
    title: "Black Tea",
    category: "Hot Beverages",
    price: 40,
    image: "/img/menu-1.jpg",
  },
  {
    id: 3,
    title: "Lemon Tea",
    category: "Hot Beverages",
    price: 45,
    image: "/img/menu-1.jpg",
  },
  {
    id: 4,
    title: "Hot Lemon",
    category: "Hot Beverages",
    price: 80,
    image: "/img/menu-1.jpg",
  },
  {
    id: 5,
    title: "Hot Lemon with Honey",
    category: "Hot Beverages",
    price: 150,
    image: "/img/menu-1.jpg",
  },
  {
    id: 6,
    title: "Americano (Single/ Double)",
    category: "Hot Beverages",
    price: { single: 150, double: 180 },
    image: "/img/menu-1.jpg",
  },
  {
    id: 7,
    title: "Cafe Mocha",
    category: "Hot Beverages",
    price: 200,
    image: "/img/menu-1.jpg",
  },
  {
    id: 8,
    title: "Cappuccino",
    category: "Hot Beverages",
    price: 180,
    image: "/img/menu-1.jpg",
  },
  {
    id: 9,
    title: "Espresso (Single/Double)",
    category: "Hot Beverages",
    price: { single: 120, double: 150 },
    image: "/img/menu-1.jpg",
  },
  {
    id: 10,
    title: "Espresso Affogato",
    category: "Hot Beverages",
    price: 150,
    image: "/img/menu-1.jpg",
  },
  {
    id: 11,
    title: "Cafe  Latte",
    category: "Hot Beverages",
    price: 150,
    image: "/img/menu-1.jpg",
  },
  {
    id: 12,
    title: "Flavor Latte (vanilla , chocolate ,Hazelnut , Caramel)",
    category: "Hot Beverages",
    price: 220,
    image: "/img/menu-1.jpg",
  },
  {
    id: 13,
    title: "Caramel Latte ",
    category: "Hot Beverages",
    price: 200,
    image: "/img/menu-1.jpg",
  },
  {
    id: 14,
    title: "Honey Latte ",
    category: "Hot Beverages",
    price: 220,
    image: "/img/menu-1.jpg",
  },
  {
    id: 15,
    title: "Caramel Macchiato",
    category: "Hot Beverages",
    price: 220,
    image: "/img/menu-1.jpg",
  },
  {
    id: 16,
    title: "Hot chocolate",
    category: "Hot Beverages",
    price: 150,
    image: "/img/menu-1.jpg",
  },
  {
    id: 17,
    title: "Flat White",
    category: "Hot Beverages",
    price: 190,
    image: "/img/menu-1.jpg",
  },
  // hot Bevarage end

  // cold Bevarage start
  {
    id: 18,
    title: "Iced Americano",
    category: "Cold Beverages",
    price: 185,
    image: "/img/menu-2.jpg",
  },
  {
    id: 19,
    title: "Iced Cappuccino",
    category: "Cold Beverages",
    price: 240,
    image: "/img/menu-2.jpg",
  },
  {
    id: 20,
    title: "Iced  Latte",
    category: "Cold Beverages",
    price: 250,
    image: "/img/menu-2.jpg",
  },
  {
    id: 21,
    title: "Iced Caramel Macchiato",
    category: "Cold Beverages",
    price: 250,
    image: "/img/menu-2.jpg",
  },
  {
    id: 22,
    title: " Blended Mocha",
    category: "Cold Beverages",
    price: 260,
    image: "/img/menu-2.jpg",
  },
  {
    id: 23,
    title: " Iced Flavor Americano",
    category: "Cold Beverages",
    price: 240,
    image: "/img/menu-2.jpg",
  },
  {
    id: 24,
    title: " Iced Flavor Cappuccino",
    category: "Cold Beverages",
    price: 250,
    image: "/img/menu-2.jpg",
  },
  {
    id: 25,
    title: " Iced Flavor Latte",
    category: "Cold Beverages",
    price: 270,
    image: "/img/menu-2.jpg",
  },
  {
    id: 26,
    title: "Peach Iced Tea",
    category: "Cold Beverages",
    price: 200,
    image: "/img/menu-2.jpg",
  },
  {
    id: 27,
    title: " Mint Lemonade",
    category: "Cold Beverages",
    price: 230,
    image: "/img/menu-2.jpg",
  },
  {
    id: 28,
    title: "Blended Mint lemonade",
    category: "Cold Beverages",
    price: 250,
    image: "/img/menu-2.jpg",
  },
  // cold Beverages end

  // Breakfast  Bevarage start
  {
    id: 29,
    title: "American Breakfast (sausage, omlet,bread,hot drink)",
    category: "Breakfast",
    price: 500,
    image: "/img/menu-2.jpg",
  },
  {
    id: 30,
    title: "Toast With butter Jam (2 pcs)",
    category: "Breakfast",
    price: 130,
    image: "/img/menu-3.jpg",
  },
  {
    id: 31,
    title: "aloo paratha with curd and mixed pickle",
    category: "Breakfast",
    price: 165,
    image: "/img/menu-3.jpg",
  },
  {
    id: 32,
    title: "plain omelet ",
    category: "Breakfast",
    price: 120,
    image: "/img/menu-3.jpg",
  },
  {
    id: 33,
    title: "chasse omelet ",
    category: "Breakfast",
    price: 200,
    image: "/img/menu-3.jpg",
  },
  {
    id: 34,
    title: "masla omelet ",
    category: "Breakfast",
    price: 200,
    image: "/img/menu-3.jpg",
  },
  // Breakfast  Bevarage end

  // Bara  start
  {
    id: 35,
    title: "Egg bara ",
    category: "Bara",
    price: 250,
    image: "/img/menu-4.jpg",
  },
  {
    id: 36,
    title: "Plain Bara",
    category: "Bara",
    price: 200,
    image: "/img/menu-4.jpg",
  },
  {
    id: 37,
    title: "Chicken Bara",
    category: "Bara",
    price: 275,
    image: "/img/menu-4.jpg",
  },
  {
    id: 38,
    title: "BUff Bara",
    category: "Bara",
    price: 275,
    image: "/img/menu-4.jpg",
  },
  // Bara  end

  // Soup  start

  {
    id: 39,
    title: "creamy mushroom soup",
    category: "Soup",
    price: 250,
    image: "/img/menu-5.jpg",
  },
  {
    id: 40,
    title: "cream and tomato soup",
    category: "Soup",
    price: 180,
    image: "/img/menu-5.jpg",
  },
  {
    id: 41,
    title: "tomato egg drop soup",
    category: "Soup",
    price: 190,
    image: "/img/menu-5.jpg",
  },
  {
    id: 42,
    title: "chicken soup",
    category: "Soup",
    price: 250,
    image: "/img/menu-5.jpg",
  },
  {
    id: 43,
    title: "hot and sour veg",
    category: "Soup",
    price: 200,
    image: "/img/menu-5.jpg",
  },
  {
    id: 44,
    title: "hot and sour soup non veg",
    category: "Soup",
    price: 250,
    image: "/img/menu-5.jpg",
  },
  // Soup  end

  // Sandwich  start

  {
    id: 46,
    title: "club sandwich",
    category: "Sandwich",
    price: 350,
    image: "/img/menu-6.jpg",
  },
  {
    id: 47,
    title: "cheese sandwich",
    category: "Sandwich",
    price: 250,
    image: "/img/menu-6.jpg",
  },
  {
    id: 48,
    title: "egg sandwich",
    category: "Sandwich",
    price: 200,
    image: "/img/menu-6.jpg",
  },
  {
    id: 49,
    title: "veg sandwich",
    category: "Sandwich",
    price: 180,
    image: "/img/menu-6.jpg",
  },
  {
    id: 50,
    title: "chicken sandwich",
    category: "Sandwich",
    price: 275,
    image: "/img/menu-6.jpg",
  },
  //sandwich end

  //Non-Veg Snacks start
  {
    id: 51,
    title: "Buff chilly",
    category: "Non-Veg Snacks",
    price: 300,
    image: "/img/menu-7.jpg",
  },
  {
    id: 52,
    title: " pork chilly",
    category: "Non-Veg Snacks",
    price: 330,
    image: "/img/menu-7.jpg",
  },
  {
    id: 53,
    title: "pork boiled",
    category: "Non-Veg Snacks",
    price: 280,
    image: "/img/menu-7.jpg",
  },
  {
    id: 54,
    title: "pork BBQ",
    category: "Non-Veg Snacks",
    price: 500,
    image: "/img/menu-7.jpg",
  },
  {
    id: 55,
    title: "pork tawa",
    category: "Non-Veg Snacks",
    price: 300,
    image: "/img/menu-7.jpg",
  },
  {
    id: 56,
    title: "Chinese chilly chicken W/B",
    category: "Non-Veg Snacks",
    price: 380,
    image: "/img/menu-7.jpg",
  },
  {
    id: 57,
    title: "chicken chilly with bone",
    category: "Non-Veg Snacks",
    price: 300,
    image: "/img/menu-7.jpg",
  },
  {
    id: 58,
    title: "chicken chilly without bone",
    category: "Non-Veg Snacks",
    price: 350,
    image: "/img/menu-7.jpg",
  },
  {
    id: 59,
    title: "chicken Drumstick 6pcs",
    category: "Non-Veg Snacks",
    price: 400,
    image: "/img/menu-7.jpg",
  },
  {
    id: 60,
    title: "chicken tawa",
    category: "Non-Veg Snacks",
    price: 330,
    image: "/img/menu-7.jpg",
  },
  {
    id: 61,
    title: "Buff Choila",
    category: "Non-Veg Snacks",
    price: 310,
    image: "/img/menu-7.jpg",
  },
  {
    id: 62,
    title: "chicken sadheko",
    category: "Non-Veg Snacks",
    price: 350,
    image: "/img/menu-7.jpg",
  },
  {
    id: 63,
    title: "Lemon Chicken",
    category: "Non-Veg Snacks",
    price: 400,
    image: "/img/menu-7.jpg",
  },
  {
    id: 64,
    title: "chicken sausage ( chilli /fry)/plate",
    category: "Non-Veg Snacks",
    price: 250,
    image: "/img/menu-7.jpg",
  },
  {
    id: 65,
    title: "Buff sausage ( chilli /fry)/plate",
    category: "Non-Veg Snacks",
    price: 240,
    image: "/img/menu-7.jpg",
  },
  {
    id: 66,
    title: "Fish Finger 6pcs",
    category: "Non-Veg Snacks",
    price: 375,
    image: "/img/menu-7.jpg",
  },
  {
    id: 67,
    title: "Fish  and chips ",
    category: "Non-Veg Snacks",
    price: 500,
    image: "/img/menu-7.jpg",
  },
  {
    id: 68,
    title: "Fish fry",
    category: "Non-Veg Snacks",
    price: 350,
    image: "/img/menu-7.jpg",
  },
  {
    id: 69,
    title: "Trout fish ",
    category: "Non-Veg Snacks",
    price: 850,
    image: "/img/menu-7.jpg",
  },
  {
    id: 70,
    title: "Crazy meat ball (chicken /buff 8pcs) ",
    category: "Non-Veg Snacks",
    price: 450,
    image: "/img/menu-7.jpg",
  },
  {
    id: 71,
    title: "chicken fry 8pcs (with bone)",
    category: "Non-Veg Snacks",
    price: 490,
    image: "/img/menu-7.jpg",
  },
  {
    id: 72,
    title: "Haas ko Choila",
    category: "Non-Veg Snacks",
    price: 455,
    image: "/img/menu-7.jpg",
  },
  {
    id: 73,
    title: "Tanbe special timmur chicken ",
    category: "Non-Veg Snacks",
    price: 695,
    image: "/img/menu-7.jpg",
  },
  {
    id: 74,
    title: "Egg pakoda",
    category: "Non-Veg Snacks",
    price: 200,
    image: "/img/menu-7.jpg",
  },
  //Non-Veg Snacks end

  //veg snacks start
  {
    id: 75,
    title: "Boiled Vegetable ",
    category: "Veg Snacks",
    price: 250,
    image: "/img/menu-8.jpg",
  },
  {
    id: 76,
    title: "French fries",
    category: "Veg Snacks",
    price: 190,
    image: "/img/menu-8.jpg",
  },
  {
    id: 77,
    title: "sweet corn",
    category: "Veg Snacks",
    price: 320,
    image: "/img/menu-8.jpg",
  },
  {
    id: 78,
    title: "peanut sadheko",
    category: "Veg Snacks",
    price: 200,
    image: "/img/menu-8.jpg",
  },
  {
    id: 79,
    title: "cashew nut frien",
    category: "Veg Snacks",
    price: 500,
    image: "/img/menu-8.jpg",
  },
  {
    id: 80,
    title: "mushroom chilly",
    category: "Veg Snacks",
    price: 300,
    image: "/img/menu-8.jpg",
  },
  {
    id: 81,
    title: "chips chilly",
    category: "Veg Snacks",
    price: 250,
    image: "/img/menu-8.jpg",
  },
  {
    id: 82,
    title: "paneer chilly ",
    category: "Veg Snacks",
    price: 300,
    image: "/img/menu-8.jpg",
  },
  {
    id: 83,
    title: "veg pakoda",
    category: "Veg Snacks",
    price: 180,
    image: "/img/menu-8.jpg",
  },
  {
    id: 84,
    title: "panner pakoda ",
    category: "Veg Snacks",
    price: 350,
    image: "/img/menu-8.jpg",
  },
  {
    id: 85,
    title: "onion pakoda ",
    category: "Veg Snacks",
    price: 175,
    image: "/img/menu-8.jpg",
  },
  {
    id: 86,
    title: "cheese ball",
    category: "Veg Snacks",
    price: 450,
    image: "/img/menu-8.jpg",
  },
  {
    id: 87,
    title: "cheeese pakoda ",
    category: "Veg Snacks",
    price: 400,
    image: "/img/menu-8.jpg",
  },
  {
    id: 88,
    title: "mushroom choila ",
    category: "Veg Snacks",
    price: 300,
    image: "/img/menu-8.jpg",
  },
  {
    id: 89,
    title: "aalo sadheko ",
    category: "Veg Snacks",
    price: 180,
    image: "/img/menu-8.jpg",
  },
  {
    id: 90,
    title: "jeera aaloo",
    category: "Veg Snacks",
    price: 190,
    image: "/img/menu-8.jpg",
  },
  {
    id: 91,
    title: "mustang aaloo",
    category: "Veg Snacks",
    price: 250,
    image: "/img/menu-8.jpg",
  },
  {
    id: 92,
    title: "bhatmaas sadheko",
    category: "Veg Snacks",
    price: 250,
    image: "/img/menu-8.jpg",
  },
  {
    id: 93,
    title: "veg tempura",
    category: "Veg Snacks",
    price: 300,
    image: "/img/menu-8.jpg",
  },
  {
    id: 94,
    title: "dry pappad (2pcs)",
    category: "Veg Snacks",
    price: 90,
    image: "/img/menu-8.jpg",
  },
  {
    id: 95,
    title: "Masala papad (2pcs)",
    category: "Veg Snacks",
    price: 110,
    image: "/img/menu-8.jpg",
  },
  {
    id: 96,
    title: "Dry and fried papad (3pcs)",
    category: "Veg Snacks",
    price: 130,
    image: "/img/menu-8.jpg",
  },

  //veg snacks end

  //Fried Rice  start

  {
    id: 97,
    title: "chicken Fried Rice",
    category: "Fried Rice",
    price: 275,
    image: "/img/menu-1.jpg",
  },

  {
    id: 98,
    title: " mix Fried Rice",
    category: "Fried Rice",
    price: 325,
    image: "/img/menu-1.jpg",
  },
  {
    id: 99,
    title: "Szechuan Fried Rice",
    category: "Fried Rice",
    price: 325,
    image: "/img/menu-1.jpg",
  },

  {
    id: 100,
    title: "Buff Fried Rice",
    category: "Fried Rice",
    price: 250,
    image: "/img/menu-1.jpg",
  },

  {
    id: 101,
    title: "Egg Fried rice",
    category: "Fried Rice",
    price: 220,
    image: "/img/menu-1.jpg",
  },
  //fried  end

  //noodels  start
  {
    id: 100,
    title: "Chicken chowmein ",
    category: "Noodles",
    price: 200,
    image: "/img/menu-2.jpg",
  },
  {
    id: 102,
    title: "Mixed chowmein",
    category: "Noodles",
    price: 250,
    image: "/img/menu-2.jpg",
  },
  {
    id: 103,
    title: "Veg chowmein",
    category: "Noodles",
    price: 150,
    image: "/img/menu-2.jpg",
  },
  {
    id: 104,
    title: "Buff chowmein",
    category: "Noodles",
    price: 190,
    image: "/img/menu-2.jpg",
  },
  {
    id: 100,
    title: "Egg chowmein",
    category: "Noodles",
    price: 175,
    image: "/img/menu-2.jpg",
  },
  //noodels  end

  //Thakali Set  start
  {
    id: 105,
    title: "Thakali Thali Chicken",
    category: "Thakali Set",
    price: 450,
    image: "/img/menu-3.jpg",
  },
  {
    id: 106,
    title: "Thakali Thali  veg",
    category: "Thakali Set",
    price: 350,
    image: "/img/menu-3.jpg",
  },
  {
    id: 107,
    title: "Thakali Thali  mutton",
    category: "Thakali Set",
    price: 590,
    image: "/img/menu-3.jpg",
  },
  {
    id: 108,
    title: "Fish Thali ",
    category: "Thakali Set",
    price: 500,
    image: "/img/menu-3.jpg",
  },
  {
    id: 109,
    title: " Trout Fish Thali ",
    category: "Thakali Set",
    price: 1050,
    image: "/img/menu-3.jpg",
  },
  //Thakali Set  end

  //Newari Khaja Set  start
  {
    id: 110,
    title: " Veg Khaja set",
    category: "Newari Khaja Set",
    price: 225,
    image: "/img/menu-4.jpg",
  },
  {
    id: 111,
    title: " Chicken khaja set  ",
    category: "Newari Khaja Set",
    price: 330,
    image: "/img/menu-4.jpg",
  },
  {
    id: 112,
    title: "Buff khaja set  ",
    category: "Newari Khaja Set",
    price: 315,
    image: "/img/menu-4.jpg",
  },
  //Newari Khaja Set  end

  //Thupka  set  start
  {
    id: 113,
    title: "chicken",
    category: "Thukpa",
    price: 200,
    image: "/img/menu-5.jpg",
  },
  {
    id: 114,
    title: "mix",
    category: "Thukpa",
    price: 250,
    image: "/img/menu-5.jpg",

  },
  {
    id: 115,
    title: "veg",
    category: "Thukpa",
    price: 175,
    image: "/img/menu-5.jpg",

  },
  {
    id: 116,
    title: "buff",
    category: "Thukpa",
    price: 180,
    image: "/img/menu-5.jpg",

  },
  {
    id: 117,
    title: "egg",
    category: "Thukpa",
    price: 175,
    image: "/img/menu-5.jpg",

  },
  //Thupka  set  end

  //Mutton   set  start

  //Mutton   set  end
];

export default menudata;
