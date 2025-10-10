import { useState } from "react";

const SettingsPage = () => {
  const [status, setStatus] = useState<string>("checking...");

  return <div>SettingsPage: {status}</div>;
};

export default SettingsPage;
