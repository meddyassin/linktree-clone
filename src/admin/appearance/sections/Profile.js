import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import firebase, { storage } from "../../../firebase/firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { dataContext } from "../../../contexts/dataContext";
import {
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import uuid from "react-uuid";
import "../Appearance.css";

function Profile() {
  const { appData } = useContext(dataContext);
  const location = useLocation();

  const [newDisplayName, setNewDisplayName] = useState("");
  const [newBio, setNewBio] = useState("");

  useEffect(() => {
    appData && setNewDisplayName(appData[0].displayName);
    appData && setNewBio(appData[0].bio);
  }, [appData && location]);

  function handleNewDisplayName(value) {
    setNewDisplayName(value);
    const delayDebounceFn = setTimeout(() => {
      appData &&
        firebase
          .database()
          .ref(appData[0].uid + "/user_info_section_1" + "/" + "displayName")
          .set(value) &&
        firebase
          .database()
          .ref(appData[0].username + "/user_info" + "/" + "displayName")
          .set(value);
    }, 100);
    return () => clearTimeout(delayDebounceFn);
  }

  function handleNewBio(value) {
    setNewBio(value);
    const delayDebounceFn = setTimeout(() => {
      appData &&
        firebase
          .database()
          .ref(appData[0].uid + "/user_info_section_1" + "/" + "bio")
          .set(value) &&
        firebase
          .database()
          .ref(appData[0].username + "/user_info" + "/" + "bio")
          .set(value);
    }, 100);
    return () => clearTimeout(delayDebounceFn);
  }

  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('')
  function handleUploadImage() {
    const imageRef =
      appData && ref(storage, `${appData[0].username + "/profilePhoto"}`);
    appData &&
      uploadBytes(imageRef, image).then(() => {
        listAll(ref(storage, appData[0].username)).then((response) => {
          response.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
              setImageUrl(url)
            })
          })
        })
      }).then(() => {
        firebase
          .database()
          .ref(appData[0].uid + "/user_info_section_1" + "/" + "photoURL")
          .set(imageUrl) &&
        firebase
        .database()
        .ref(appData[0].username + "/user_info" + "/" + "photoURL")
        .set(imageUrl);
      })
  }

  console.log(imageUrl)

  return (
    <div className="section_container">
      <div className="profile_image_settings_container">
        <div className="profile_image_settings_image">
          {appData && appData[0].photoURL ? (
            <img style={{ borderRadius: "50%" }} src={appData[0].photoURL} />
          ) : (
            "loading spiner"
          )}
        </div>
        <div className="profile_image_settings_buttons">
          <Button borderRadius="44px" colorScheme="purple" onClick={openModal}>
            Pick an image
          </Button>
          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            isCentered={true}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>upload Image</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <Button onClick={handleUploadImage}>Upload Image</Button>
              </ModalBody>
            </ModalContent>
          </Modal>
          <Button borderRadius="44px">Remove</Button>
        </div>
      </div>
      <Input
        type="text"
        value={newDisplayName}
        onChange={(e) => handleNewDisplayName(e.target.value)}
      />
      <Input
        type="text"
        value={newBio}
        onChange={(e) => handleNewBio(e.target.value)}
      />
    </div>
  );
}

export default Profile;
