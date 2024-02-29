interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div>
      <h1 className="text-center">{title}</h1>
    </div>
  );
};

export default Header;
