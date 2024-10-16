"use client";
import React, { useState } from "react";
import { Splitter, Upload } from "antd";
import { InboxOutlined, SendOutlined } from "@ant-design/icons";
import Chat from "@/app/components/chat";
import axios from "axios";
const { Dragger } = Upload;
const Desc = ({ children }) => <div className="h-full p-5">{children}</div>;

const props = {
  name: "file",
  multiple: true,
  action: "https://44.194.247.50:8080/api/v1/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      console.log(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      console.log(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Detail = ({ params }) => {
  const [sizes, setSizes] = React.useState(["30%", "70%"]);
  const [enabled, setEnabled] = React.useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://44.194.247.50:8080/api/v1/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadStatus("File uploaded successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("File upload failed!");
    }
  };

  return (
    <div
      style={{
        minHeight: 280,
        padding: 24,
        flex: 1, // Make children take up the remaining space
        height: "100%",
      }}
    >
      <Splitter
        onResize={setSizes}
        style={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
        className=""
      >
        <Splitter.Panel size={sizes[0]} resizable={enabled}>
          <Desc>
            <Chat />
          </Desc>
        </Splitter.Panel>
        <Splitter.Panel size={sizes[1]}>
          <Desc>
            <div>
              <Dragger {...props} className="">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibited from
                  uploading company data or other banned files.
                </p>
              </Dragger>
            </div>
          </Desc>
          <div className="container">
            <h1>File Upload</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload File</button>
            {uploadStatus && <p>{uploadStatus}</p>}
          </div>
        </Splitter.Panel>
      </Splitter>
    </div>
  );
};

export default Detail;
