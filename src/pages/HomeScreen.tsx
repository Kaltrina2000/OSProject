import Modal from "@components/Modal/Modal";
import { Icon } from "@components/shared/Icon/Icon";
import { Toggle } from "@components/Switch/Toggle";
import { useAuthContext } from "@context/AuthContext/AuthContext";


interface Props {
  onLogout: () => void;
}

export const HomeScreen = ({ onLogout }: Props) => {
  const authCtx = useAuthContext();

  var showdate = new Date();
  var day =
    showdate.getDate() +
    "/" +
    (showdate.getMonth() + 1) +
    "/" +
    showdate.getFullYear();

  var dispalyTime =
    showdate.getHours() +
    ":" +
    showdate.getMinutes() +
    ":" +
    showdate.getSeconds();

  return (
    <div className="h-screen flex flex-col">
      <nav className="bg-grey border-gray-200 dark:bg-gray-900 dark:text-white">
        <div className="flex justify-between">
          <p className="font-bold my-1">Preferences</p>
          <Toggle />
          <div className="flex justify-end ...">
            <p className="font-bold my-1">75%</p>
            <Icon className="w-7 my-1" icon="battery-life" />
            <h1 className="font-bold my-1">
              {day} {dispalyTime}
            </h1>
          </div>
        </div>
      </nav>
      <div className="flex mt-5 ml space-x-5">
        <div className="flex">
          {<Modal icon="camera" title="Camera"/>}
          {<Modal icon="firefox-brands" title="Browser" />}
          {<Modal icon="newspaper" title="News" />}
          {<Modal icon="images" title="Gallery" />}
          {<Modal icon="folder" title="Folder" />}
        </div>
      </div>
    </div>
  );
};
