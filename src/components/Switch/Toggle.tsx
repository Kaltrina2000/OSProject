import { Switch } from "@headlessui/react";
import { useUIContext } from "@context/UIContext/UIContext";


export const Toggle = () => {
  const { darkMode, toggleDarkMode } = useUIContext();
  

  return (
    <div className="flex items-center">
      <Switch.Group>
        <Switch.Label className="mr-4">Dark Mode</Switch.Label>
        <Switch
          checked={darkMode}
          onChange={toggleDarkMode}
          className={`${
            darkMode ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full `}
        >
          <span
            className={`${
              darkMode ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </Switch.Group>
    </div>
  );
};
