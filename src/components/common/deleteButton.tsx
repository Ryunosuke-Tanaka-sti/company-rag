type DeleteButtonProps = {
  onClick: () => void;
};

export const DeleteButton = (props: DeleteButtonProps) => {
  const { onClick } = props;
  return (
    <button
      className="flex flex-row items-center rounded-lg bg-gray-300 px-3 py-1"
      onClick={onClick}
    >
      <span className="text-[#525252]">会話を削除する</span>
      <svg
        className="size-12"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M47.5 10H38.75L36.25 7.5H23.75L21.25 10H12.5V15H47.5M15 47.5C15 48.8261 15.5268 50.0979 16.4645 51.0355C17.4021 51.9732 18.6739 52.5 20 52.5H40C41.3261 52.5 42.5979 51.9732 43.5355 51.0355C44.4732 50.0979 45 48.8261 45 47.5V17.5H15V47.5Z"
          fill="white"
        />
      </svg>
    </button>
  );
};
