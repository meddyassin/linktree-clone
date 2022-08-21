import { useState } from "react";
import {
  Button,
  RadioGroup,
  Stack,
  Radio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import "./Settings.css";

function SocialIcons() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const [value, setValue] = useState("Top");
  const number = 2;

  const modal = (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Icon</ModalHeader>
        <ModalCloseButton />
        <ModalBody>hey</ModalBody>
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
