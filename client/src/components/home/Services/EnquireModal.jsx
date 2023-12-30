// import clsx from "clsx"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  // ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const EnquireModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={{ base: '2xl', md: '3xl' }}>
            Contact Details
          </ModalHeader>
          <ModalCloseButton color={{ base: 'gray.400', md: 'gray.500' }} />
          <ModalBody>
            <div className="tw-space-y-4 tw-px-4">
              <p className="tw-text-base tw-text-gray-500 dark:tw-text-gray-400">
                Contact below to learn more about our services and pricing based
                on your requirements.
              </p>
              <ul className="tw-text-base tw-leading-relaxed tw-text-gray-500 dark:tw-text-gray-400">
                <li>Dr Harimurugan</li>
                <li>harimurugan@nitj.ac.in</li>
                <li>7009109091</li>
              </ul>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EnquireModal;
