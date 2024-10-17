import { Cloud } from "lucide-react";
import Dropzone from "react-dropzone";

type UploadZoneProps = {
  selectedFiles: File[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<File[]>>;
};

const UploadDropZone = ({
  // selectedFiles,
  setSelectedFiles,
}: UploadZoneProps) => {


  return (
    <Dropzone
      multiple={true}
      onDrop={async (acceptedFiles) => {
        setSelectedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <div
          {...getRootProps()}
          className="border m-4 border-dashed border-gray-300 rounded-lg"
        >
          <div className="flex items-center justify-center h-full w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-accent"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                <Cloud className="h-6 w-6 text-primary-black mb-2" />
                <p className="mb-2 text-sm text-primary-black">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
              </div>
              <input
                {...getInputProps()}
                className="hidden"
                // id="dropzone-file"
              />
            </label>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

const UploadFile = ({ selectedFiles, setSelectedFiles }: UploadZoneProps) => {
  return (
    <UploadDropZone
      selectedFiles={selectedFiles}
      setSelectedFiles={setSelectedFiles}
    />
  );
};

export default UploadFile;

// console.log(fileIDs, "fileIDsfileIDs");

// const determinateProgress = () => {
//   setUploadProgress(0);
//   const interval = setInterval(() => {
//     setUploadProgress((prevProgress) => {
//       if (prevProgress >= 95) {
//         clearInterval(interval);
//         return prevProgress;
//       }
//       return prevProgress + 5;
//     });
//   }, 500);

//   return interval;
// };
{
  /* <p className="text-xs text-primary-blue">
File size up to 512 MB
</p>
<p className="text-xs text-primary-blue mt-2 px-4 py-2">
<span className="font-medium">
  ZIP, JPEGS, WEBP, PNG, JPG
</span>{" "}
are all supported
<br />
We recommend that you should name your zip file after your
trigger word. if you have just photos uploaded not that will
be handle the file compression and name it after your trigger
word
</p> */
}
