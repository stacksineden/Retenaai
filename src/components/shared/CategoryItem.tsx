const CategoryItem = ({ Icon, label }: CatergoryItemProps) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 p-3 border-b-2 "text-primary-blue" hover:text-primary-blue transition cursor-pointer`}
      // onClick={() => setAssistantCategory(value!)}
    >
      {Icon}
      <div className="font-medium text-sm truncate">{label}</div>
    </div>
  );
};

export default CategoryItem;

type CatergoryItemProps = {
  label?: string;
  value?: string;
  Icon?: JSX.Element;
};
