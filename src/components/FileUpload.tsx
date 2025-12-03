import React from "react";
import { Upload } from "lucide-react";

interface FileUploadProps {
  label?: string;
  onUpload?: (files: FileList | null) => void;
}
const FileUpload: React.FC<FileUploadProps> = ({ label, onUpload }) => (
  <div>
    {label && (
      <label className="block text-sm font-medium text-gray-700 mb-3">
        {label}
      </label>
    )}
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
      <input
        type="file"
        id="file-upload"
        className="hidden"
        onChange={(e) => onUpload?.(e.target.files)}
      />
      <label
        htmlFor="file-upload"
        className="cursor-pointer flex flex-col items-center"
      >
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
          <Upload className="w-6 h-6 text-gray-400" />
        </div>
        <p className="text-sm font-medium text-gray-700 mb-1">
          Drop files here or click to upload
        </p>
        <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB each</p>
      </label>
    </div>
  </div>
);
export default FileUpload;
