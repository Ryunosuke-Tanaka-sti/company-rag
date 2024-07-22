import { useMemo, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

type PDFViewerProps = {
  link: string;
};

export const PDFViewer = (props: PDFViewerProps) => {
  const { link } = props;
  const [, setNumPages] = useState<number>();
  const [pageNumber] = useState<number>(1);

  const options = useMemo(() => {
    return { cMapUrl: "https://unpkg.com/pdfjs-dist@4.4.168/cmaps/" };
  }, []);
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    console.log("success");
  }

  return (
    <>
      <Document
        className={"flex size-full items-center justify-center"}
        file={link}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
      >
        <Page pageNumber={pageNumber} className={""} />
      </Document>
    </>
  );
};
