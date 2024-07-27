export const SearchContent = () => {
  return (
    <a className="flex w-full flex-col items-start justify-end gap-2 rounded bg-gray-200 px-2 py-4 hover:cursor-pointer">
      <h1 className="text-lg font-bold">社内規約の概要</h1>
      <p>
        社内規約は、従業員の行動基準や業務遂行に関する基本方針を示す文書です。本規約は、会社の価値観や倫理に基づき、業務の透明性、公正さ、法令遵守を確保するためのガイドラインを提供します。従業員は、これらの規約を遵守することで、職場環境の安全性や健全性を維持し、会社全体の信頼性向上に貢献することが求められます。具体的には、情報セキュリティ、ハラスメント防止、コンプライアンスなどに関する規定が含まれています。
      </p>
      <div className="flex w-full flex-row items-center justify-end gap-2">
        <span className="text-lg">詳細を開く</span>
        <svg
          className="size-6"
          viewBox="0 0 60 60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 27.4999V32.4999H40L26.25 46.2499L29.8 49.7999L49.6 29.9999L29.8 10.2L26.25 13.75L40 27.4999H10Z" />
        </svg>
      </div>
    </a>
  );
};
