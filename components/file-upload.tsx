import { ourFileRouter } from "@/app/api/uploadthing/core";
import { UploadDropzone } from "@/lib/uploadthing";
import toast from "react-hot-toast";

type Props = {
  onUpload: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
};

export default function FileUpload({ onUpload, endpoint }: Props) {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => onUpload(res?.[0].url)}
      onUploadError={(err) => toast.error(err.message)}
    />
  );
}
