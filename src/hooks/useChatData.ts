import { ChatDataType } from "@customTypes/chatData";

export const useChatData = () => {
  const getChatData = (): ChatDataType[] => {
    const temp = sessionStorage.getItem("chatData");
    if (temp != null) {
      return JSON.parse(temp) as ChatDataType[];
    }
    return [];
  };

  const saveChatData = (chatData: ChatDataType[]) => {
    const temp = JSON.stringify(chatData);
    sessionStorage.setItem("chatData", temp);
  };

  const deleteChatData = () => {
    sessionStorage.removeItem("chatData");
  };

  return { getChatData, saveChatData, deleteChatData };
};
