import { ChatDataType } from "@customTypes/chatData";

type UserMessageProps = {
  chatData: ChatDataType;
};

export const UserMessage = (props: UserMessageProps) => {
  const { chatData } = props;
  const { message } = chatData;
  return (
    <div className="flex flex-row items-start justify-end gap-2">
      <div className="flex min-h-14 max-w-md items-center justify-start break-all rounded bg-[#DBEAFE] px-1 py-2 text-base	">
        <span className="block">{message}</span>
      </div>
      <div className="flex size-14 items-center justify-center rounded-full bg-[#3B82F6]">
        <svg
          className="size-7"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 0C16.9891 0 18.8968 0.790176 20.3033 2.1967C21.7098 3.60322 22.5 5.51088 22.5 7.5C22.5 9.48912 21.7098 11.3968 20.3033 12.8033C18.8968 14.2098 16.9891 15 15 15C13.0109 15 11.1032 14.2098 9.6967 12.8033C8.29018 11.3968 7.5 9.48912 7.5 7.5C7.5 5.51088 8.29018 3.60322 9.6967 2.1967C11.1032 0.790176 13.0109 0 15 0ZM15 18.75C23.2875 18.75 30 22.1063 30 26.25V30H0V26.25C0 22.1063 6.7125 18.75 15 18.75Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};
