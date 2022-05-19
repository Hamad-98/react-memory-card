import { v4 as uuidv4 } from "uuid";
import IMAGES from "../../assets/Image";

const cardData = [
  { name: "Cat", src: IMAGES.catIcon, key: uuidv4() },
  { name: "Chicken", src: IMAGES.chickenIcon, key: uuidv4() },
  { name: "Crocodile", src: IMAGES.crocodileIcon, key: uuidv4() },
  { name: "Hamster", src: IMAGES.hamsterIcon, key: uuidv4() },
  { name: "KillerWhale", src: IMAGES.killerWhaleIcon, key: uuidv4() },
  { name: "Lion", src: IMAGES.lionIcon, key: uuidv4() },
  { name: "Octopus", src: IMAGES.octopusIcon, key: uuidv4() },
  { name: "Toucan", src: IMAGES.toucanIcon, key: uuidv4() },
  { name: "Whale", src: IMAGES.whaleIcon, key: uuidv4() },
];

export default cardData;
