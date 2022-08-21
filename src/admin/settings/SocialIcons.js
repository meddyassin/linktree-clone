import { useState, useEffect, useContext } from "react";
import {
  Button,
  Center,
  Input,
  RadioGroup,
  Stack,
  Radio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import "./Settings.css";
import { dataContext } from "../../contexts/dataContext";

// ----------------------------- social media Icons ----------------------------- //

const facebookIcon = (
  <svg
    aria-hidden="true"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    style={{ width: "24px", height: "24px" }}
  >
    <title data-testid="svgTitle" id="title_0.5259032206524334">
      facebook
    </title>
    <path d="M23,12A11,11,0,1,0,10.279,22.865h0a11.08,11.08,0,0,0,3.436,0h0A10.952,10.952,0,0,0,23,12ZM10.859,21.935v-6.9a.5.5,0,0,0-.5-.5H8.193V12.5h2.166a.5.5,0,0,0,.5-.5V9.686c0-2.278,1.264-3.585,3.459-3.585a15.392,15.392,0,0,1,1.858.137V7.89h-.824l-.019,0a2,2,0,0,0-2.181,1.735,1.8,1.8,0,0,0-.011.4V12a.5.5,0,0,0,.5.5H15.97l-.312,2.035H13.641a.5.5,0,0,0-.5.5v6.9A10.124,10.124,0,0,1,10.859,21.935Zm3.282-.166V15.535h1.946a.5.5,0,0,0,.5-.425l.465-3.035a.5.5,0,0,0-.494-.575H14.141V10.016a1.267,1.267,0,0,1,.308-.821,1.218,1.218,0,0,1,.9-.3h1.324a.5.5,0,0,0,.5-.5V5.806a.5.5,0,0,0-.42-.494A16.661,16.661,0,0,0,14.325,5.1c-2.754,0-4.466,1.757-4.466,4.585V11.5H7.693a.5.5,0,0,0-.5.5v3.035a.5.5,0,0,0,.5.5H9.859v6.234a10,10,0,1,1,4.282,0Z"></path>
  </svg>
);

const instagramIcon = (
  <svg
    aria-hidden="true"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    style={{ width: "24px", height: "24px" }}
  >
    <title data-testid="svgTitle" id="title_0.10237887463729489">
      instagram
    </title>
    <path d="M21.938,7.71a7.329,7.329,0,0,0-.456-2.394,4.615,4.615,0,0,0-1.1-1.694,4.61,4.61,0,0,0-1.7-1.1,7.318,7.318,0,0,0-2.393-.456C15.185,2.012,14.817,2,12,2s-3.185.012-4.29.062a7.329,7.329,0,0,0-2.394.456,4.615,4.615,0,0,0-1.694,1.1,4.61,4.61,0,0,0-1.1,1.7A7.318,7.318,0,0,0,2.062,7.71C2.012,8.814,2,9.182,2,12s.012,3.186.062,4.29a7.329,7.329,0,0,0,.456,2.394,4.615,4.615,0,0,0,1.1,1.694,4.61,4.61,0,0,0,1.7,1.1,7.318,7.318,0,0,0,2.393.456c1.1.05,1.472.062,4.29.062s3.186-.012,4.29-.062a7.329,7.329,0,0,0,2.394-.456,4.9,4.9,0,0,0,2.8-2.8,7.318,7.318,0,0,0,.456-2.393c.05-1.1.062-1.472.062-4.29S21.988,8.814,21.938,7.71Zm-1,8.534a6.351,6.351,0,0,1-.388,2.077,3.9,3.9,0,0,1-2.228,2.229,6.363,6.363,0,0,1-2.078.388C15.159,20.988,14.8,21,12,21s-3.159-.012-4.244-.062a6.351,6.351,0,0,1-2.077-.388,3.627,3.627,0,0,1-1.35-.879,3.631,3.631,0,0,1-.879-1.349,6.363,6.363,0,0,1-.388-2.078C3.012,15.159,3,14.8,3,12s.012-3.159.062-4.244A6.351,6.351,0,0,1,3.45,5.679a3.627,3.627,0,0,1,.879-1.35A3.631,3.631,0,0,1,5.678,3.45a6.363,6.363,0,0,1,2.078-.388C8.842,3.012,9.205,3,12,3s3.158.012,4.244.062a6.351,6.351,0,0,1,2.077.388,3.627,3.627,0,0,1,1.35.879,3.631,3.631,0,0,1,.879,1.349,6.363,6.363,0,0,1,.388,2.078C20.988,8.841,21,9.2,21,12S20.988,15.159,20.938,16.244Z"></path>
    <path d="M17.581,5.467a.953.953,0,1,0,.952.952A.954.954,0,0,0,17.581,5.467Z"></path>
    <path d="M12,7.073A4.927,4.927,0,1,0,16.927,12,4.932,4.932,0,0,0,12,7.073Zm0,8.854A3.927,3.927,0,1,1,15.927,12,3.932,3.932,0,0,1,12,15.927Z"></path>
  </svg>
);

const linkedinIcon = (
  <svg
    aria-hidden="true"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    style={{ width: "24px", height: "24px" }}
  >
    <title data-testid="svgTitle" id="title_0.9024602052397885">
      linkedin
    </title>
    <path d="M4.425,1.671A2.738,2.738,0,0,0,1.5,4.4,2.71,2.71,0,0,0,4.369,7.128H4.4a2.734,2.734,0,1,0,.028-5.457ZM4.4,6.128H4.369a1.736,1.736,0,1,1,.056-3.457A1.737,1.737,0,1,1,4.4,6.128Z"></path>
    <path d="M6.541,8.431H2.253a.5.5,0,0,0-.5.5v12.9a.5.5,0,0,0,.5.5H6.541a.5.5,0,0,0,.5-.5V8.931A.5.5,0,0,0,6.541,8.431Zm-.5,12.9H2.753V9.431H6.041Z"></path>
    <path d="M17.064,8.128A4.691,4.691,0,0,0,13.7,9.362V8.931a.5.5,0,0,0-.5-.5H8.914a.5.5,0,0,0-.5.523c.053,1.183,0,12.756,0,12.873a.5.5,0,0,0,.5.5H13.2a.5.5,0,0,0,.5-.5v-7.2a2.749,2.749,0,0,1,.1-.86,1.869,1.869,0,0,1,1.737-1.254c.413,0,1.671,0,1.671,2.417v6.9a.5.5,0,0,0,.5.5H22a.5.5,0,0,0,.5-.5v-7.4C22.5,10.485,20.467,8.128,17.064,8.128Zm4.436,13.2H18.213v-6.4c0-2.973-1.673-3.417-2.671-3.417a2.83,2.83,0,0,0-2.664,1.878,3.253,3.253,0,0,0-.177,1.236v6.7H9.416c.009-2.058.04-9.654.009-11.9H12.7v1.328a.5.5,0,0,0,.92.272,3.769,3.769,0,0,1,3.443-1.9c2.819,0,4.436,1.934,4.436,5.305Z"></path>
  </svg>
);

const tiktokIcon = (
  <svg
    aria-hidden="true"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    style={{ width: "24px", height: "24px" }}
  >
    <title data-testid="svgTitle" id="title_0.1052217838242353">
      tiktok
    </title>
    <path d="M9.37,23.5a7.468,7.468,0,0,1,0-14.936.537.537,0,0,1,.538.5v3.8a.542.542,0,0,1-.5.5,2.671,2.671,0,1,0,2.645,2.669.432.432,0,0,1,0-.05V1a.5.5,0,0,1,.5-.5h3.787a.5.5,0,0,1,.5.5A4.759,4.759,0,0,0,21.59,5.76a.5.5,0,0,1,.5.5L22.1,10a.533.533,0,0,1-.519.515,9.427,9.427,0,0,1-4.741-1.268v6.789A7.476,7.476,0,0,1,9.37,23.5ZM8.908,9.585a6.466,6.466,0,1,0,6.93,6.447V8.326a.5.5,0,0,1,.791-.407A8.441,8.441,0,0,0,21.1,9.5l-.006-2.76A5.761,5.761,0,0,1,15.859,1.5H13.051V16.032a.458.458,0,0,1,0,.053,3.672,3.672,0,1,1-4.14-3.695Z"></path>
  </svg>
);

const twitterIcon = (
  <svg
    aria-hidden="true"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    style={{ width: "24px", height: "24px" }}
  >
    <title data-testid="svgTitle" id="title_0.4304896596997829">
      twitter
    </title>
    <path d="M8.1,21.034A12.717,12.717,0,0,1,1.23,19.019a.5.5,0,0,1,.329-.917,8.273,8.273,0,0,0,4.992-1,4.807,4.807,0,0,1-3.173-3.13.5.5,0,0,1,.348-.636A4.821,4.821,0,0,1,1.843,9.523a.548.548,0,0,1,.247-.458.506.506,0,0,1,.5-.034l.091.049A4.816,4.816,0,0,1,2.529,4a.507.507,0,0,1,.393-.247.5.5,0,0,1,.427.183,11.781,11.781,0,0,0,7.9,4.27c-.013-.144-.02-.289-.02-.435a4.81,4.81,0,0,1,8.116-3.493,8.157,8.157,0,0,0,2.32-.93.5.5,0,0,1,.73.583,4.781,4.781,0,0,1-.662,1.32c.191-.067.378-.143.563-.225a.5.5,0,0,1,.585.135.5.5,0,0,1,.034.6,9.2,9.2,0,0,1-2.057,2.2c0,.1,0,.208,0,.313A12.636,12.636,0,0,1,8.1,21.034ZM3.527,19.105a11.72,11.72,0,0,0,4.577.929A11.645,11.645,0,0,0,19.863,8.275c0-.179,0-.357-.012-.533a.5.5,0,0,1,.207-.43,8.181,8.181,0,0,0,.959-.81,9.068,9.068,0,0,1-.932.16.5.5,0,0,1-.316-.925,3.857,3.857,0,0,0,.977-.837,9.013,9.013,0,0,1-1.465.418.5.5,0,0,1-.461-.148,3.812,3.812,0,0,0-6.491,3.473.5.5,0,0,1-.1.434.489.489,0,0,1-.409.179A12.772,12.772,0,0,1,3.09,5.167,3.812,3.812,0,0,0,4.573,9.591a.5.5,0,0,1,.2.569.523.523,0,0,1-.491.347,4.772,4.772,0,0,1-1.36-.242A3.813,3.813,0,0,0,5.9,13.257a.5.5,0,0,1,.033.972,6.63,6.63,0,0,1-1.279.17,3.809,3.809,0,0,0,3.236,1.914.5.5,0,0,1,.3.894A9.081,9.081,0,0,1,3.527,19.105Z"></path>
  </svg>
);

const youtubeIcon = (
  <svg
    aria-hidden="true"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    style={{ width: "24px", height: "24px" }}
  >
    <title data-testid="svgTitle" id="title_0.5379602516749931">
      youtube
    </title>
    <path d="M12,20.55c-.3,0-7.279-.006-9.115-.5A3.375,3.375,0,0,1,.5,17.665,29.809,29.809,0,0,1,0,12,29.824,29.824,0,0,1,.5,6.334,3.375,3.375,0,0,1,2.885,3.948c1.836-.492,8.819-.5,9.115-.5s7.279.006,9.115.5A3.384,3.384,0,0,1,23.5,6.334,29.97,29.97,0,0,1,24,12a29.97,29.97,0,0,1-.5,5.666,3.384,3.384,0,0,1-2.388,2.386C19.279,20.544,12.3,20.55,12,20.55Zm0-16.1c-.072,0-7.146.006-8.857.464A2.377,2.377,0,0,0,1.464,6.593,29.566,29.566,0,0,0,1,12a29.566,29.566,0,0,0,.464,5.407,2.377,2.377,0,0,0,1.679,1.679c1.711.458,8.785.464,8.857.464s7.146-.006,8.857-.464a2.377,2.377,0,0,0,1.679-1.679A29.66,29.66,0,0,0,23,12a29.66,29.66,0,0,0-.464-5.407h0a2.377,2.377,0,0,0-1.679-1.679C19.146,4.456,12.071,4.45,12,4.45ZM9.7,15.95a.5.5,0,0,1-.5-.5V8.55a.5.5,0,0,1,.75-.433l5.975,3.45a.5.5,0,0,1,0,.866L9.95,15.883A.5.5,0,0,1,9.7,15.95Zm.5-6.534v5.168L14.675,12Z"></path>
  </svg>
);

// ----------------------------- go to next page Icons ----------------------------- //

const arrowIcon = (
  <svg
    viewBox="0 0 16 16"
    color="palette.blueGrey8"
    enable-background="new 0 0 24 24"
    style={{ width: "24px", height: "24px" }}
  >
    <path d="M6 4.99986C5.99413 4.73335 5.9002 4.51898 5.6771 4.30461L1.46771 0.2432C1.30333 0.0809751 1.10959 -0.000137329 0.868885 -0.000137329C0.387476 -0.000137329 0 0.38225 0 0.851543C0 1.08329 0.0939335 1.30345 0.27593 1.47727L3.95695 4.99407L0.27593 8.52246C0.0998043 8.69627 0 8.91064 0 9.14818C0 9.61748 0.387476 9.99986 0.868885 9.99986C1.10372 9.99986 1.30333 9.92454 1.46771 9.75653L5.6771 5.69511C5.9002 5.48074 6 5.26058 6 4.99986Z"></path>
  </svg>
);

// ----------------------------- header Icons ----------------------------- //

const backIcon = (
  <svg
    viewBox="0 0 24 24"
    enable-background="new 0 0 24 24"
    style={{ width: "24px", height: "24px" }}
  >
    <path d="M8 12c0 .306.114.562.358.801l5.935 5.901a.926.926 0 00.699.298c.56 0 1.008-.455 1.008-1.025a1.04 1.04 0 00-.309-.736L10.398 12l5.293-5.239c.195-.198.309-.463.309-.735C16 5.455 15.553 5 14.992 5a.929.929 0 00-.7.297L8.359 11.19c-.244.248-.35.496-.358.81z"></path>
  </svg>
);

const closeIcon = (
  <svg
    viewBox="0 0 24 24"
    focusable="false"
    style={{ width: "14px", height: "24px" }}
  >
    <path d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"></path>
  </svg>
);

function SocialIcons() {
  const number = 2;

  const { appData } = useContext(dataContext);

  let remoteSocialIconsArray = [];
  appData &&
    appData.map(
      (item) =>
        item.id === "user_settings" &&
        remoteSocialIconsArray.push(Object.values(item).slice(0, -1))
    );
  console.log(remoteSocialIconsArray);

  const localSocialIconsArray = [
    {
      id: 1,
      icon: facebookIcon,
      website: "Facebook",
    },
    {
      id: 2,
      icon: instagramIcon,
      website: "Instagram",
    },
    {
      id: 3,
      icon: linkedinIcon,
      website: "Linkedin",
    },
    {
      id: 4,
      icon: tiktokIcon,
      website: "Tiktok",
    },
    {
      id: 5,
      icon: twitterIcon,
      website: "Twitter",
    },
    {
      id: 6,
      icon: youtubeIcon,
      website: "Youtube",
    },
  ];

  const [userSocialMediaUsername, setUserSocialMediaUsername] = useState("");
  const [typingMessage, setTypingMessage] = useState("");
  const [isActive, setIsActive] = useState(false);

  function linkIsReady() {
    setTypingMessage("");
    setIsActive(true);
  }

  function linkIsLong() {
    setTypingMessage("link seems too long");
    setIsActive(false);
  }

  function linkIsEmpty() {
    setTypingMessage("");
    setIsActive(false);
  }

  function handleChange(value) {
    setUserSocialMediaUsername(value);
    if (
      clickedSocialIcon === "Facebook" ||
      clickedSocialIcon === "Instagram" ||
      clickedSocialIcon === "Twitter"
    ) {
      value && (value.length < 2 || value[0] !== "@")
        ? setTypingMessage("plz")
        : setTypingMessage("");
    }
    if (clickedSocialIcon === "Tiktok") {
      value && (value.length < 2 || value[0] !== "@")
      ? setTypingMessage("plz")
      : setTypingMessage("");
    }
    if (clickedSocialIcon === "Linkedin") {
      value && (value.length < 4 || value[0] + value[1] + value[2] !== "in/")
        ? setTypingMessage(
            "plz enter a valid linkedin route, link should be /in/your-username"
          )
        : value.length >= 4 && value.length < 20
        ? linkIsReady()
        : value.length >= 20
        ? linkIsLong()
        : linkIsEmpty();
    }
    if (clickedSocialIcon === "Youtube") {
      value && (value.length < 3 || value[0] + value[1] !== "c/")
        ? setTypingMessage("plz")
        : setTypingMessage("");
    }
  }

  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setClickedSocialIcon();
    setTypingMessage("");
    setUserSocialMediaUsername("");
    setIsActive(false);
  }

  function handleBackButton() {
    setClickedSocialIcon();
    setTypingMessage("");
    setUserSocialMediaUsername("");
    setIsActive(false);
  }

  const [value, setValue] = useState("Top");
  const [clickedSocialIcon, setClickedSocialIcon] = useState();
  const modal = (
    <Modal isOpen={isOpen} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {clickedSocialIcon ? (
            <div onClick={handleBackButton}>
              <Button
                colorScheme="white"
                style={{
                  padding: "0px",
                  display: "flex",
                  justifyContent: "center",
                }}
                _hover={{ background: "#edf2f7" }}
              >
                {backIcon}
              </Button>
            </div>
          ) : (
            <span></span>
          )}
          <div>Add Icon</div>
          <div className="close_icon" onClick={closeModal}>
            <Button
              colorScheme="white"
              style={{
                padding: "0px",
                display: "flex",
                justifyContent: "center",
              }}
              _hover={{ background: "#edf2f7" }}
            >
              {closeIcon}
            </Button>
          </div>
        </ModalHeader>
        <ModalBody>
          {clickedSocialIcon ? (
            <div className="add_to_linktree_container">
              <p className="add_to_linktree_message">
                Enter your {clickedSocialIcon} route
              </p>
              <Input
                placeholder={
                  clickedSocialIcon === "Facebook" ||
                  clickedSocialIcon === "Instagram" ||
                  clickedSocialIcon === "Twitter" ||
                  clickedSocialIcon === "Tiktok"
                    ? "@yoursername"
                    : clickedSocialIcon === "Linkedin"
                    ? "in/yourusername"
                    : clickedSocialIcon === "Youtube"
                    ? "c/yourusername"
                    : ""
                }
                onChange={(e) => handleChange(e.target.value)}
                value={userSocialMediaUsername}
              />
              <p>{typingMessage}</p>
              <Button
                className="add_to_linktree_button"
                isActive={isActive}
                isDisabled={!isActive}
              >
                Add to Linktree, clone
              </Button>
            </div>
          ) : (
            localSocialIconsArray.map((social) => {
              return (
                <div
                  key={social.id}
                  className="local_social_icons_container"
                  onClick={() => setClickedSocialIcon(social.website)}
                >
                  <div className="icon">{social.icon}</div>
                  <div className="website">{social.website}</div>
                  <div className="arrow">{arrowIcon}</div>
                </div>
              );
            })
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );

  if (number === 1) {
    return (
      <div className="add_icon_main_section">
        <div className="add_icon_button">
          <Button
            width="95%"
            padding="12px"
            borderRadius="12px"
            colorScheme="purple"
            onClick={openModal}
          >
            Add Icon
          </Button>
        </div>

        {modal}

        <div>
          <p>Reorder icons by dragging the items above.</p>
        </div>

        <div>
          <h3>Position</h3>
          <p>Display icons at the:</p>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="column">
              <Radio value="Top">First</Radio>
              <Radio value="Bottom">Second</Radio>
            </Stack>
          </RadioGroup>
        </div>
      </div>
    );
  } else if (number === 2) {
    return (
      <div className="add_icon_no_data_section">
        <img src="https://assets.production.linktr.ee/9cdf04d9071e53d06ff81a4dd00722ce5af47708/images/cover-social-links.jpg" />

        <div className="add_icon_no_data_section_message">
          <h2>Be Iconic</h2>
          <p>
            Show visitors all the ways they can engage with you and your
            content.
          </p>
        </div>

        <div className="add_icon_button">
          <Button
            width="95%"
            padding="12px"
            borderRadius="12px"
            colorScheme="purple"
            onClick={openModal}
          >
            Add Icon
          </Button>
        </div>

        {modal}
      </div>
    );
  } else {
    return <div>loading</div>;
  }
}

export default SocialIcons;
