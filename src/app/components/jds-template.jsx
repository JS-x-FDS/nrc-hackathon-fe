"use client";
import React from "react";
import { Splitter, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import Chat from "@/app/components/chat";
import Papa from "papaparse";

const { Dragger } = Upload;
const Desc = ({ children }) => (
  <div className="h-full p-5 relative">{children}</div>
);

const Detail = ({ params, auth }) => {
  const [csvData, setCsvData] = React.useState([]);
  const [sizes, setSizes] = React.useState(["30%", "70%"]);
  const [enabled, setEnabled] = React.useState(true);

  const props = {
    name: "file",
    multiple: false,
    action: "http://44.194.247.50:8080/api/v1/uploadFile",
    onChange(info) {
      const { status } = info.file;

      Papa.parse(info.file.originFileObj, {
        complete: (result) => {
          setCsvData(result.data);
        },
        header: true, // Set to true if your CSV has headers
      });

      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
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
            <div className="px-4 py-10">
              {csvData.length > 0 && (
                <table className="table-auto border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      {Object.keys(csvData[0]).map((key, idx) => (
                        <th key={idx} className="border px-4 py-2">
                          {key}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {csvData.map((row, index) => (
                      <tr key={index}>
                        {Object.values(row).map((val, idx) => (
                          <td key={idx} className="border px-4 py-2">
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </Desc>
        </Splitter.Panel>
      </Splitter>
    </div>
  );
};

export default Detail;
