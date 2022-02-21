import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/styles";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import { useDropzone } from "react-dropzone";

export default function UploadPhoto(props) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptFiles) => {
      props.DragAndDropImage(acceptFiles[0]);
    },
  });
  const classes = useStyles();

  const ImageThumb = ({ image }) => {
    return <Image src={props.file.previewURL} alt={image.name} />;
  };
  return (
    <div>
      <Dialog classes={{ paper: classes.paper }} open>
        <Title>
          Upload Photo
          <Img style={{ cursor: "pointer" }} onClick={props.clicked}>
            <b>X</b>
          </Img>
        </Title>

        <DialogContent classes={{ root: classes.root }}>
          {props.file?.previewURL ? (
            <div {...getRootProps()}>
              <UploadArea>
                <ImageThumb image={props.file} />
                <input {...getInputProps()} />
                <div className={classes.photoReplacer}>
                  <label className={classes.styleUploadBtn} for="upload-file">
                    <img
                      className={classes.replacePhoto}
                      src="/images/upload.svg"
                      alt=""
                    />
                  </label>
                  <p className={classes.replaceText}>Replace Photo</p>{" "}
                </div>
              </UploadArea>
            </div>
          ) : (
            <div {...getRootProps()}>
              <UploadArea>
                <input {...getInputProps()} />{" "}
                <ImageTag
                  className={classes.styleUploadImg}
                  src={props.ImageURL || "/images/upload.svg"}
                  alt="logo_image"
                />
                <div className={classes.photoReplacer}>
                  <label className={classes.styleUploadBtn} for="upload-file">
                    <img
                      className={classes.replacePhoto}
                      src="/images/upload.svg"
                      alt=""
                    />
                  </label>
                  <p className={classes.replaceText}>Browse</p>{" "}
                </div>
              </UploadArea>
            </div>
          )}
          <Row>
            <SubmitButton
              type="submit"
              style={{ cursor: "pointer" }}
              onClick={props.savePicture}
            >
              Use Photo
            </SubmitButton>
            <CancelButton
              type="submit"
              style={{ cursor: "pointer" }}
              onClick={props.clicked}
            >
              Cancel
            </CancelButton>
          </Row>
        </DialogContent>
      </Dialog>
    </div>
  );
}
const useStyles = makeStyles(() => ({
  paper: {
    width: "35%",
  },
  "@media (max-width: 1024px)": {
    paper: {
      width: "50%",
    },
  },
  root: {
    padding: "8px 36px",
  },
  styleContainer: {
    display: "flex",
    flexFlow: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  styleText: {
    width: "48%",
  },
  styleUploadBtn: {
    margin: "0 auto",
    display: "block",
    textAlign: "center",
    zIndex: "1",
    position: "relative",
    background: "#ffffff",
    width: "min-content",
    cursor: "pointer",
  },
  styleUploadImg: {
    width: "100%",
    height: "250px",
  },
  replacePhoto: {
    height: "16px",
    width: "16px",
  },
  styleParagraph: {
    margin: "-3px 0px 0px 7px",
    fontSize: "12px",
    letterSpacing: "0.5px",
    textAlign: "center",
  },
  replaceText: {
    margin: "-3px 0px 0px 7px",
    fontSize: "11px",
    letterSpacing: "0.5px",
    textAlign: "center",
    color: "#009fe0",
    cursor: "pointer",
  },
  styleBrowse: {
    color: "#009fe0",
    cursor: "pointer",
  },
  photoReplacer: {
    marginBottom: "-38px",
  },
}));

const Img = styled.span`
  width: 16px;
  height: 16px;
  margin-left: auto;
`;
const SubmitButton = styled.button`
  height: 40px;
  width: 45%;
  border-radius: 4px;
  border: solid 1px #d5d5d5;
  background-color: #00a1ed;
  padding: 9px 0px;
  color: white;
  font-size: 12px;
  margin-bottom: 55px;
`;
const CancelButton = styled.button`
  height: 40px;
  margin-left: 36px;
  width: 45%;
  border-radius: 4px;
  border: solid 1px #009fe0;
  background-color: #ffffff;
  padding: 9px 0px;
  color: #009fe0;
  font-size: 12px;
  margin-bottom: 55px;
`;
const UploadArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 250px;
  border-radius: 4px;
  border: 1px dashed #009fe0;
  margin-bottom: 50px;
`;

const Title = styled.div`
  display: flex;
  font-size: 15px;
  padding: 24px 17px 15px 34px;
  font-weight: 500;
`;
const Image = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;
const ImageTag = styled.img`
  width: 100%;
  height: 250px;
`;
