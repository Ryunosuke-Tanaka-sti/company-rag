import { ChatDataType } from "@customTypes/chatData";
import { PDFType } from "@customTypes/pdf";
import { Divider } from "./divider";

type BotMessageProps = {
  chatData: ChatDataType;
  onClickLink: (props: PDFType) => void;
};

export const BotMessage = (props: BotMessageProps) => {
  const { chatData, onClickLink } = props;
  const { message, links } = chatData;
  return (
    <div className="flex flex-row-reverse items-start justify-end gap-2">
      <div className="flex min-h-14 max-w-md flex-col items-center justify-start gap-3 break-all rounded bg-[#DCFCE7] px-1 py-2 text-base	">
        <span className="block w-full">{message}</span>
        <Divider />
        <ul className="flex w-full flex-wrap gap-3">
          {links.map((link, index) => (
            <PDFLink
              key={index}
              link={link}
              onClick={() => onClickLink({ link: link, fileName: link })}
            />
          ))}
        </ul>
      </div>
      <div className="flex size-14 items-center justify-center rounded-full bg-[#22C55E]">
        <svg
          className="size-7"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0.5C14.663 0.5 15.2989 0.763392 15.7678 1.23223C16.2366 1.70107 16.5 2.33696 16.5 3C16.5 3.925 16 4.7375 15.25 5.1625V6.75H16.5C18.8206 6.75 21.0462 7.67187 22.6872 9.31282C24.3281 10.9538 25.25 13.1794 25.25 15.5H26.5C26.8315 15.5 27.1495 15.6317 27.3839 15.8661C27.6183 16.1005 27.75 16.4185 27.75 16.75V20.5C27.75 20.8315 27.6183 21.1495 27.3839 21.3839C27.1495 21.6183 26.8315 21.75 26.5 21.75H25.25V23C25.25 23.663 24.9866 24.2989 24.5178 24.7678C24.0489 25.2366 23.413 25.5 22.75 25.5H5.25C4.58696 25.5 3.95107 25.2366 3.48223 24.7678C3.01339 24.2989 2.75 23.663 2.75 23V21.75H1.5C1.16848 21.75 0.850537 21.6183 0.616116 21.3839C0.381696 21.1495 0.25 20.8315 0.25 20.5V16.75C0.25 16.4185 0.381696 16.1005 0.616116 15.8661C0.850537 15.6317 1.16848 15.5 1.5 15.5H2.75C2.75 13.1794 3.67187 10.9538 5.31282 9.31282C6.95376 7.67187 9.17936 6.75 11.5 6.75H12.75V5.1625C12 4.7375 11.5 3.925 11.5 3C11.5 2.33696 11.7634 1.70107 12.2322 1.23223C12.7011 0.763392 13.337 0.5 14 0.5ZM8.375 14.25C7.5462 14.25 6.75134 14.5792 6.16529 15.1653C5.57924 15.7513 5.25 16.5462 5.25 17.375C5.25 18.2038 5.57924 18.9987 6.16529 19.5847C6.75134 20.1708 7.5462 20.5 8.375 20.5C9.2038 20.5 9.99866 20.1708 10.5847 19.5847C11.1708 18.9987 11.5 18.2038 11.5 17.375C11.5 16.5462 11.1708 15.7513 10.5847 15.1653C9.99866 14.5792 9.2038 14.25 8.375 14.25ZM19.625 14.25C18.7962 14.25 18.0013 14.5792 17.4153 15.1653C16.8292 15.7513 16.5 16.5462 16.5 17.375C16.5 18.2038 16.8292 18.9987 17.4153 19.5847C18.0013 20.1708 18.7962 20.5 19.625 20.5C20.4538 20.5 21.2487 20.1708 21.8347 19.5847C22.4208 18.9987 22.75 18.2038 22.75 17.375C22.75 16.5462 22.4208 15.7513 21.8347 15.1653C21.2487 14.5792 20.4538 14.25 19.625 14.25Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

type PDFLinkProps = {
  link: string;
  onClick: () => void;
};

const PDFLink = (props: PDFLinkProps) => {
  const { link, onClick } = props;
  return (
    <li
      className="rounded bg-gray-300 p-1 text-base hover:cursor-pointer "
      onClick={onClick}
    >
      {link}
    </li>
  );
};
