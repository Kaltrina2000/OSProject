import { Icon } from "@components/shared/Icon/Icon";
import { IconDefinition } from "@components/shared/Icon/Icon.generated";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";
import { GoogleSearch } from "../Browser/GoogleSearch";
import { Gallery } from "../Gallery/Gallery";
import { News } from "../News/News";

interface Props {
  title: string;
  icon: IconDefinition;
}

export default function Modal(props: Props) {
  
  let [isOpen, setIsOpen] = useState(true);
  let [openedModal, setOpenedModal] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
    setOpenedModal;
  }
  const Modals:any ={
    Browser: <GoogleSearch />,
    News: <News />,
    Gallery: <Gallery />,

}
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex mt-5 ml-4 space-x-5 justify-center items-center">
          <div className="w-20 h-20 shadow-md flex justify-center items-center select-none bg-[#D9D9D9] rounded-full mb-3">
            {
              <Icon
                className="w-9 mx-2"
                icon={props.icon}
                onClick={() => openModal()}
              />
            }
          </div>
          {/* <p>{props.title}</p> */}
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="w-full h-full min-h-[500px] max-w-[1500px]transform overflow-hidden rounded-2xl items-center justify-center p-28 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full max-h-[500px] max-w-[1500px]transform overflow-hidden rounded-2xl bg-gray-50 p-6 text-left align-middle shadow-xl transition-all">
                  {Modals[props.title]}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
