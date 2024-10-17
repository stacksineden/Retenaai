import {
  Activity,
  BookOpen,
  Brain,
  Code,
  ImagePlus,
  Languages,
  LineChart,
  Palmtree,
  PencilLine,
  Percent,
  Salad,
} from "lucide-react";
import CategoryItem from "./CategoryItem";

export const categories = [
  {
    label: "Business",
    icon: <LineChart />,
    value: "business and marketing",
  },
  {
    label: "Programming",
    icon: <Code />,
    value: "technology",
  },
  {
    label: "LifeStyle",
    icon: <Palmtree />,
    value: "lifestyle and social media",
  },
  {
    label: "Education",
    icon: <BookOpen />,
    value: "education",
  },
  {
    label: "Writing", 
    icon: <PencilLine />,
    value: "writing and translation",
  },
  {
    label: "Nutrition",
    icon: <Salad />,
    value: "nutrition",
  },
  {
    label: "Translation",
    icon: <Languages />,
    value: "writing and translation",
  },
  {
    label: "Psychology",
    icon: <Brain />,
    value: "health and fitness",
  },
  {
    label: "Digital Arts",
    icon: <ImagePlus />,
    value: "arts",
  },
  {
    label: "Education",
    icon: <BookOpen />,
    value: "education",
  },
  {
    label: "Writing", 
    icon: <PencilLine />,
    value: "writing and translation",
  },
  // {
  //   label: "Voice over",
  //   icon: <Mic2 />,
  //   description: "Assistants in the tech space",
  // },
  {
    label: "Digital Marketing",
    icon: <Percent />,
    value: "business and marketing",
  },
  {
    label: "Health and fitness",
    icon: <Activity />,
    value: "health and fitness",
  },
];

const Categories = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryItem
            key={item?.label}
            label={item?.label} 
            value={item?.value}
            Icon={item.icon}
          />
        ))}
      </div>
    </>
  );
};

export default Categories;
