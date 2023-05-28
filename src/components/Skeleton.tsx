interface Props {
  className: string;
}

export const Skeleton = ({ className }: Props) => {
  return (
    <div className={ className }></div>
  );
};
