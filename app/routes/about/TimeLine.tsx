export default function Timeline() {
  const items = [
    {
      year: 2024,
      description: "愛知工業大学卒業\n愛知工業大学院入学",
    },
    {
      year: 2020,
      description: "愛知工業大学入学",
    },
  ];
  return (
    <ul className="flex flex-col">
      {items.map((item) => (
        <li
          key={item.year}
          className="inline-block relative pb-10
        after:inline-block after:w-1 after:h-full after:bg-primary after:absolute after:-left-9 after:top-1
        before:inline-block before:w-3 before:h-3 before:bg-primary before:absolute before:rounded-full before:-left-10"
        >
          {/* <div
            className="inline-block relative w-56
          after:inline-block after:w-1 after:h-full after:bg-white after:absolute after:-top-5 
          before:inline-block before:w-3 before:h-3 before:bg-white before:absolute before:-top-6 before:rounded-full"
          /> */}
          <h3>{item.year}</h3>
          <p className="pt-5 whitespace-pre-wrap">{`${item.description}`}</p>
        </li>
      ))}
    </ul>
  );
}
