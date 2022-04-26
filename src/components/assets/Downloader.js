import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import Axios from "axios";
import FileDownload from "js-file-download";

const DownloaderUI = ({ url, filename }) => {
  const [downloadInfo, setDownloadInfo] = useState({
    progress: 0,
    completed: false,
    total: 0,
    loaded: 0,
  });

  useEffect(() => {
    const options = {
      onDownloadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;

        setDownloadInfo({
          progress: Math.floor((loaded * 100) / total),
          loaded,
          total,
          completed: false,
        });
      },
    };

    Axios.get(url, {
      responseType: "blob",
      ...options,
    }).then((res) => {
      FileDownload(res.data, filename);

      setDownloadInfo((info) => ({
        ...info,
        completed: true,
      }));
    });
  }, []);

  const formatBytes = (bytes) => `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

  return (
    <small>
      {downloadInfo.loaded > 0 && (
        <>
          <b>{formatBytes(downloadInfo.loaded)}</b>/{" "}
          {formatBytes(downloadInfo.total)}{" "}
          <ProgressBar
            variant="success"
            now={downloadInfo.progress}
            label={`${downloadInfo.progress}%`}
            striped={true}
          />
          {downloadInfo.completed ? (
            <span className="text-success">
              <b>Completed &#x2714;</b>
            </span>
          ) : (
            <div className="spinner-border spinner-border-sm" />
          )}
        </>
      )}

      {downloadInfo.loaded === 0 && <>Initializing...</>}
    </small>
  );
};

const Downloader = () => {
  const [file, setFile] = useState("");

  const download = (file) => {
    setFile(file);
  };

  return [(e) => download(e), !!file ? <DownloaderUI {...file} /> : null];
};

export default Downloader;
