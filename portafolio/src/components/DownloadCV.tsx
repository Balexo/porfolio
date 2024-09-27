import RegularButton from "./shared/RegularButton";

const DownloadCV = () => {
  const handleDownload = () => {
    const cvLink = "../../public/OSCAR_VALLEJO_CV.pdf";

    const link = document.createElement("a");
    link.href = cvLink;
    link.download = "Oscar_Vallejo_CV.pdf";
    link.click();
  };

  return <RegularButton onClick={handleDownload}>Descargar CV</RegularButton>;
};

export default DownloadCV;
