import React, { useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

interface UploadPdfProps {
  apiEndpoint: string;
  onSuccess?: (response: any) => void;
  onError?: (error: any) => void;
}

const UploadPdf: React.FC<UploadPdfProps> = ({ apiEndpoint, onSuccess, onError }) => {
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      uploadFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      uploadFile(e.target.files[0]);
    }
  };

  const uploadFile = async (file: File) => {
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("pdf", file);
      const res = await fetch(apiEndpoint, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Error al subir el PDF");
      const data = await res.json();
      onSuccess?.(data);
      // Ejemplo: navegar a otra ruta tras éxito
      // navigate("/resultado", { state: { data } });
    } catch (err: any) {
      setError(err.message || "Error desconocido");
      onError?.(err);
    }
    setLoading(false);
  };

  return (
    <div
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition-colors ${dragActive ? "border-blue-700 bg-blue-50" : "border-blue-300 bg-white"}`}
      onClick={() => inputRef.current?.click()}
      style={{ minHeight: 120 }}
    >
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={handleChange}
        disabled={loading}
      />
      <span className="text-4xl mb-2">📤</span>
      <span className="font-medium text-sm text-center mb-2">
        {loading ? "Subiendo PDF..." : "Arrastra un PDF aquí o haz click para seleccionar"}
      </span>
      {error && <span className="text-red-600 text-xs mt-2">{error}</span>}
    </div>
  );
};

export default UploadPdf;
