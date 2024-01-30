interface IItem {
  color: string;
  value: string;
}

interface IProps {
  items: IItem[];
}

const ListItem: React.FC<IProps> = (props) => {
  return (
    <ul>
      {props.items.map(({ color, value }) => (
        <li key={color} style={{ backgroundColor: value, color: "white" }}>
          {color}
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
