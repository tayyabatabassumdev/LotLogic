
import Modal from "../../Modal";

interface RegistrationModalProps {
  show: boolean;
  onClose: () => void;
}
const RegistrationModal: React.FC<RegistrationModalProps> = ({ show, onClose }) =>  {
  return (
  <Modal show={show} onClose={onClose}>
    <div className="text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg
          className="w-8 h-8 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">
        Request Submitted!
      </h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Your registration request has been sent to the admin for review.
        You’ll be notified via email once approved.
      </p>
      <button
        onClick={onClose}
        className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200"
      >
        Got it, Thanks!
      </button>
    </div>
  </Modal>
)};
export default RegistrationModal;
