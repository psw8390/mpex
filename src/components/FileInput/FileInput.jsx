import React, { useState, useEffect, useRef } from "react";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../../service/firebase";
import styles from './FileInput.module.css';
import loadingImg from "./spinner.gif";



// storage를 가져옵니다. 처음 firebase init하는 코드에 넣지 않아도 됩니다.
const FileInput = ({setUrl, loading, setLoading}) => {
  const [file, setFile] = useState("");
  const [setFileName] = useState("");
  const [previewURL, setPreviewURL] = useState("");
  const [preview, setPreview] = useState(null);
  
  const fileRef = useRef();
  
  useEffect(() => {
    if (file !== "") {
      setPreview(
        <img className={styles.imgPreview} src={previewURL} alt="previewImage" />
      );
    }
    return () => {};
  }, [file, previewURL]);

  const handleFileOnChange = event => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();
    const uniqueKey = new Date().getTime();
    const newName = file.name
      .replace(/[~`!#$%^&*+=\-[\]\\';,/{}()|\\":<>?]/g, "")
      .split(" ")
      .join("");

    const metaData = {
      contentType: file.type
    };

    const fileName = newName + uniqueKey

    reader.onloadend = () => {
      setFile(file); 
      setFileName(fileName); 
      setPreviewURL(reader.result);
      setLoading(true);
      saveToFirebaseStorage(file, metaData, fileName);
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleFileButtonClick = e => {
    e.preventDefault();
    fileRef.current.click();
  };

  // 여기가 upload 함수입니다.
  const saveToFirebaseStorage = (file, metaData, fileName) => {
    const storageRef = ref(storage, "Images/" + fileName);
    const UploadTask = uploadBytesResumable(storageRef, file, metaData);
    UploadTask.on(
      "state_changed",
      snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      error => {
        alert(`error: image upload error ${JSON.stringify(error)}`);
      },
      () => {
        getDownloadURL(UploadTask.snapshot.ref).then(downloadUrl => {
          console.log(`완료 url: ${downloadUrl}`);
          setUrl(downloadUrl);
          setLoading(false)
        });
      }
    );
  };

  // // 여기가 delete 코드입니다.
  // const deleteFile = () => {
  //   const desertRef = ref(storage, "Images/" + fileName);

  //   deleteObject(desertRef)
  //     .then(() => {
  //       console.log(`delete success`);
  //     })
  //     .catch(error => {
  //       console.log(`delete ${error}`);
  //     });
  // };

  

  return (
    <div>
      <div className={styles.priviewRapping}>{loading?<img className={styles.imgPreview} src={loadingImg} alt="previewImage" />:preview}</div>
      <div className={styles.priviewImg}>
        <input
          ref={fileRef}
          hidden={true}
          id="file"
          type="file"
          onChange={handleFileOnChange}
        ></input>

        <button className={styles.uploadBtn} onClick={handleFileButtonClick}>UPLOAD</button>
        
        {/* <button className={styles.imgDelete}onClick={deleteFile}>DELETE</button> */}
      </div>
    </div>
  );
};

export default FileInput;