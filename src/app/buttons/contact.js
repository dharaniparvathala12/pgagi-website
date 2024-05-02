import { PopupButton } from "react-calendly";

const ContactButton = () => {
  return (
    <div className="App" id="root">
      <div className="bg-black hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg inline-flex items-center gap-3 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
        <PopupButton
          // url={url}
          // rootElement={rootElement}
          text="Contact us"
        ></PopupButton>
      </div>
    </div>
  );
};

export default ContactButton;
