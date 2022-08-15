import React, { useState, useEffect, useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { authContext } from "../../contexts/authContext";
import { dataContext } from "../../contexts/dataContext";
import firebase from "../../firebase/firebase";
import ChooseUsername from "./ChooseUsername";
import Nav1 from "../../components/nav1/Nav1";
import Nav2 from "../../components/nav2/Nav2";
import Nav3 from "../../components/nav3/Nav3";
import Phone from "../../components/phone/Phone";
import Link from "./Link";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerContent,
  Center,
  Button,
} from "@chakra-ui/react";
import "./Links.css";

function Links() {
  const [isOpen, setIsOpen] = useState(false);

  // getting the states from context
  const { email, uid, displayName, photoURL } = useContext(authContext);
  const { dataCenter, appData} = useContext(dataContext);

  // storing the uid/name/email/photoURL each time the user sign
  useEffect(() => {
    if (email && uid) {
      firebase
        .database()
        .ref(`${localStorage.getItem("this_uid")}/0`)
        .set({
          uid: uid,
          displayName: displayName,
          email: email,
          photoURL: photoURL,
        });
    }
  }, [email, uid, displayName, photoURL]);


  // const arrayToFindLastId = []
  // appData && appData.slice(1).map((link) => arrayToFindLastId.push(link.id))
  // arrayToFindLastId.length > 0 && console.log(arrayToFindLastId[arrayToFindLastId.length - 1])

  // const arrayToFindLastCount = []
  // appData && appData.slice(1).map((link) => arrayToFindLastCount.push(link.counter))
  // arrayToFindLastCount.length > 0 && console.log(arrayToFindLastCount)
  

  appData && console.log(appData)
 
  // adding links
  function addLink() {
    appData && 
      firebase
        .database()
        .ref(appData[appData.length - 1].username + "/" + 3)
        .set({
          title: "title",
          url: "url",
          id: 3,
          counter: 3,
          prioritize: false,
          lock: false,
          analytics: "analytics",
        });
    // when a user clicks on add a link, we will sort the appData array
  }

  // adding text, youtube, twitter
  function explore() {
    console.log(explore);
  }

  // reordering lists, storing link coming from appData in linksArray
  let dbLinksArray = [];
  const [linksArray, updateLinksArray] = useState(dbLinksArray);

  useEffect(() => {
    dbLinksArray = appData && appData.splice(0, appData.length-1)
    updateLinksArray(dbLinksArray);
  }, [appData]);

  const [triggerEffect, setTriggerEffect] = useState(0);
  // the new organised array is stored in linksArray
  
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(linksArray)
    const [reorderedItem] = items.splice(result.source.index, 1)

    items.splice(result.destination.index, 0, reorderedItem)

    updateLinksArray(items.reverse());

    setTriggerEffect(triggerEffect + 1);
  }


  // this function now store everything in firebase
  let counter = 0;
  useEffect(() => {
    appData &&
      linksArray &&
      linksArray.length >= 1 &&
      linksArray.map((link) => {
        counter = counter + 1;
        firebase
          .database()
          .ref(appData[appData.length - 1].username + "/" + counter)
          .set({
            title: appData && link.title,
            url: appData && link.url,
            counter: counter,
            id: appData && link.id,
            prioritize: false,
            lock: false,
            analytics: "analytics",
          });
      });
  }, [triggerEffect]);

  // UI UI UI UI UI UI UI UI UI UI
  if (dataCenter && dataCenter.length == 2) {
    return (
      <div className="grid-container">
        <div className="item1">
          <Nav1 />
        </div>
        <div className="item2">
          <Nav2 />
        </div>
        <div className="item3">
          <Nav3 />
        </div>
        <div className="item4">
          <div className="buttons">
            <Button
              width="48%"
              padding="23px"
              borderRadius="44px"
              colorScheme="purple"
              onClick={addLink}
            >
              Add New Link
            </Button>
            <Button
              width="48%"
              padding="23px"
              borderRadius="44px"
              colorScheme="purple"
              onClick={explore}
            >
              Explore
            </Button>
          </div>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ul
                  className="characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {appData &&
                    linksArray &&
                    linksArray.length >= 1 && 
                    linksArray.map(
                      (
                        {
                          key,
                          counter,
                          id,
                          visible,
                          url,
                          title,
                          prioritize,
                          lock,
                          analytics,
                        },
                        index
                      ) => {
                        return (
                          <Draggable
                            key={id.toString()}
                            draggableId={id.toString()}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <Link
                                  key={id}
                                  id={id}
                                  counter={counter}
                                  visible={visible}
                                  url={url}
                                  title={title}
                                  prioritize={prioritize}
                                  lock={lock}
                                  analytics={analytics}
                                />
                              </div>
                            )}
                          </Draggable>
                        );
                      }
                    )}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <div className="item5">
          <Phone />
        </div>
        <div className="see_page">
          <Button
            bg="#d7dce1"
            padding="14px 24px"
            _hover={{ bg: "#d7dce1" }}
            borderRadius="44px"
            onClick={() => setIsOpen(true)}
          >
            <img
              style={{ marginRight: "10px" }}
              src="https://assets.production.linktr.ee/14f6b0bd648f6f157cb40b7dc3f45e063bd82031/images/icon-eye_preview-button.svg"
            />
            preview
          </Button>
        </div>
        <Drawer isOpen={isOpen} size="full" placement="bottom">
          <DrawerContent>
            <DrawerBody style={{ padding: 0 }}>
              <Phone />
            </DrawerBody>
            <Center>
              <DrawerFooter>
                <Button
                  bg="#d7dce1"
                  padding="30px 24px"
                  _hover={{ bg: "#d7dce1" }}
                  borderRadius="50%"
                  onClick={() => setIsOpen(false)}
                >
                  <img src="https://assets.production.linktr.ee/c987488e509df2d74bacac14c08cd77ab6950563/images/icon-cross-large.svg" />
                </Button>
              </DrawerFooter>
            </Center>
          </DrawerContent>
        </Drawer>
      </div>
    );
  } else if (dataCenter && dataCenter.length == 1) {
    return <ChooseUsername />;
  } else {
    return "todo: loading background should be gray and divided by two";
  }
}

export default Links;
