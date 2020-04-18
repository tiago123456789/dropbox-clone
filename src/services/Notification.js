import CONSTANTS from "../constantes/App";
import toastr from "toastr";

class Notification {

    static success(message) {
        toastr.success(message, '', CONSTANTS.TOASTR_OPTIONS);
    }

    static error(message) {
        toastr.error(message, '', CONSTANTS.TOASTR_OPTIONS);
    }
}

export default Notification;