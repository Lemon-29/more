
type Props = {
    title: string;
    className?: string;
};
const Title = ({ title, className }: Props ) => {
  return (
    <h2 className={`text-3xl font-bold  py-3 items-center gap-4, ${className} `}>{title}</h2>
  )
}

export default Title