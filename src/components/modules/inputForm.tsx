import { SubmitHandler, useForm } from "react-hook-form";

type InputFormProps = {
  onSubmit: (message: string) => Promise<void>;
};

export const InputForm = (props: InputFormProps) => {
  const { onSubmit } = props;
  type FormTypes = {
    message: string;
  };

  const { register, handleSubmit, reset } = useForm<FormTypes>({
    defaultValues: {
      message: "",
    },
  });
  const onSubmitFunction: SubmitHandler<FormTypes> = async (
    data: FormTypes
  ) => {
    await onSubmit(data.message);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitFunction)}
      className="flex h-10 w-full flex-row items-center justify-start overflow-hidden rounded-md"
    >
      <input
        className="grow bg-gray-100 px-3 py-2 text-base"
        placeholder="メッセージを入力"
        type="text"
        {...register("message", { required: "こちらの値は必須です" })}
      />
      <button className="block h-full w-12  items-center justify-center bg-[#3B82F6]">
        <svg
          className="m-auto size-5"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M5.40568 17.2424L14.3408 4.90692L-0.753906 6.94385L1.64149 10.9488L10.908 6.96012L3.01029 13.2374L5.40568 17.2424Z"
              fill="white"
            />
          </g>
        </svg>
      </button>
    </form>
  );
};
