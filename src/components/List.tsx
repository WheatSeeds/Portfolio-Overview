type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string;
  getKey: (item: T) => string | number;
};

export default function List<T>(props: ListProps<T>) {
  return (
    <>
      <div className={props.className}>
        {props.items.map((item) => (
          <div key={props.getKey(item)}>{props.renderItem(item)}</div>
        ))}
      </div>
    </>
  );
}
