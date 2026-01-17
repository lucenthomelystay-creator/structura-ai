import { useState, useCallback } from "react";
import { Upload, File, X, FileText, Box, Image } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
}

const supportedFormats = [
  { ext: ".ifc", name: "IFC", icon: Box, description: "Industry Foundation Classes" },
  { ext: ".step/.stp", name: "STEP", icon: Box, description: "Standard for Exchange of Product Data" },
  { ext: ".dxf", name: "DXF", icon: FileText, description: "AutoCAD Drawing Exchange Format" },
  { ext: ".stl", name: "STL", icon: Box, description: "Stereolithography" },
  { ext: ".pdf", name: "PDF", icon: Image, description: "Architectural Drawings" },
];

const FileUpload = ({ onFileSelect, selectedFile }: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      onFileSelect(files[0]);
    }
  }, [onFileSelect]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileSelect(files[0]);
    }
  }, [onFileSelect]);

  const getFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Upload Your Building Model</h2>
      <p className="text-muted-foreground mb-8">
        Upload your structural model or architectural drawing. We'll auto-detect structural elements.
      </p>

      {/* Drop Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all ${
          isDragging
            ? "border-primary bg-primary/5"
            : selectedFile
            ? "border-success bg-success/5"
            : "border-border hover:border-primary/50 hover:bg-secondary/30"
        }`}
      >
        {selectedFile ? (
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 border border-success/20 mb-4">
              <File className="h-8 w-8 text-success" />
            </div>
            <p className="font-semibold mb-1">{selectedFile.name}</p>
            <p className="text-sm text-muted-foreground mb-4">
              {getFileSize(selectedFile.size)}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onFileSelect(null as any)}
            >
              <X className="mr-2 h-4 w-4" />
              Remove File
            </Button>
          </div>
        ) : (
          <>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20 mx-auto mb-4">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <p className="font-semibold mb-1">
              Drop your file here or{" "}
              <label className="text-primary hover:underline cursor-pointer">
                browse
                <input
                  type="file"
                  className="hidden"
                  accept=".ifc,.step,.stp,.dxf,.stl,.pdf"
                  onChange={handleFileInput}
                />
              </label>
            </p>
            <p className="text-sm text-muted-foreground">
              Supports IFC, STEP, DXF, STL, and PDF files up to 100MB
            </p>
          </>
        )}
      </div>

      {/* Supported Formats */}
      <div className="mt-8">
        <h3 className="text-sm font-semibold text-muted-foreground mb-4">SUPPORTED FORMATS</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {supportedFormats.map((format) => (
            <div
              key={format.ext}
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border"
            >
              <format.icon className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <div className="text-sm font-medium">{format.name}</div>
                <div className="text-xs text-muted-foreground">{format.ext}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
