type ViewerControllerProps = {
  fileName: string;
};

export const ViewerController = (props: ViewerControllerProps) => {
  const { fileName } = props;
  return (
    <div className="flex h-10 w-full flex-row items-center justify-center overflow-hidden rounded-md">
      <span>{fileName}</span>
    </div>
  );
};
