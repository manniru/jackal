import { toast } from "react-toastify";

const darkNotification = (text) =>
  toast.dark(text, {
    autoClose: 3000,
    pauseOnHover: false,
    position: "top-center",
  });
const darkNotificationBottom = (text) =>
  toast.dark(text, {
    position: "bottom-center",
    autoClose: 10000,
    closeOnClick: true,
    pauseOnHover: true,
  });
const errorNotification = (text) =>
  toast.error(text, {
    autoClose: 2000,
    pauseOnHover: false,
    position: "top-center",
  });
const successNotification = (text) =>
  toast.success(text, {
    autoClose: 2000,
    pauseOnHover: false,
    position: "top-center",
  });

export {
  darkNotification,
  darkNotificationBottom,
  errorNotification,
  successNotification,
};
