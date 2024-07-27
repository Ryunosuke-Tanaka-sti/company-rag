import { BotMessage } from "@components/common/botMessage";
import { DeleteButton } from "@components/common/deleteButton";
import { Divider } from "@components/common/divider";
import { Header } from "@components/common/header";
import { UserMessage } from "@components/common/userMessage";
import { InputForm } from "@components/modules/inputForm";
import { PDFViewer } from "@components/modules/pdfViewer";
import { ViewerController } from "@components/modules/viewerController";
import { ChatDataType } from "@customTypes/chatData";
import { PDFType } from "@customTypes/pdf";
import { useEffect, useState } from "react";
import { useChatData } from "./hooks/useChatData";

import test1 from "@assets/test1.pdf";
import test2 from "@assets/test2.pdf";
import { SearchContent } from "@components/common/SearchContent";

function App() {
  const { getChatData, saveChatData, deleteChatData } = useChatData();
  const [chatData, setChatData] = useState<ChatDataType[]>(getChatData());

  const [pdfFile, setPDFFile] = useState<{ link: string; fileName: string }>({
    link: "",
    fileName: "",
  });

  const onSubmit = async (message: string) => {
    // ユーザーのメッセージを追加
    setChatData((data) => [
      ...data,
      { writer: "user", message: message, links: [] },
    ]);

    // api通信
    // botの返答追加
    setChatData((data) => [
      ...data,
      { writer: "bot", message: "こんにちは", links: [test1, test2] },
    ]);
  };

  const onClickPDFLink = (pdf: PDFType) => {
    setPDFFile({ link: pdf.link, fileName: pdf.fileName });
  };

  const onClickDelete = () => {
    deleteChatData();
    setChatData([]);
    setPDFFile({ link: "", fileName: "" });
  };

  useEffect(() => {
    saveChatData(chatData);
  }, [chatData, saveChatData]);

  const SwitchMessage = (chatData: ChatDataType, index: number) => {
    if (chatData.writer === "user") {
      return <UserMessage key={index} chatData={chatData} />;
    } else {
      return (
        <BotMessage
          key={index}
          chatData={chatData}
          onClickLink={onClickPDFLink}
        />
      );
    }
  };

  return (
    <>
      <main className="flex h-screen flex-col">
        <Header />
        <section className="flex grow flex-row gap-1">
          <div className="flex h-full w-1/2 flex-col gap-3 py-2">
            <div className="flex justify-end">
              <DeleteButton onClick={onClickDelete} />
            </div>
            <div className="flex h-96 grow flex-col gap-2 overflow-y-scroll">
              {chatData.map((data, index) => SwitchMessage(data, index))}
              <SearchContent />
              <SearchContent />
            </div>
            <Divider />
            <div className="px-3 py-6">
              <InputForm onSubmit={onSubmit} />
            </div>
          </div>
          <div className="flex h-full w-1/2 flex-col gap-3 overflow-hidden py-2">
            <div className="grow bg-gray-300">
              <PDFViewer link={pdfFile.link} />
            </div>
            <Divider />
            <div className="px-3 py-6">
              <ViewerController fileName={pdfFile.fileName} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
