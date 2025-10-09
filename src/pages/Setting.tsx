import {
  BluetoothSerial,
  type BluetoothState,
} from "@e-is/capacitor-bluetooth-serial";
import { useEffect, useState } from "react";

const SettingsPage = () => {
  const [status, setStatus] = useState<string>("checking...");

  const requestAndCheck = async () => {
    try {
      // Request Bluetooth runtime permissions

      // Now check
      const response: BluetoothState = await BluetoothSerial.isEnabled();
      const newStatus = response.enabled ? "enabled" : "disabled";
      setStatus(newStatus);
      console.log("Bluetooth is", newStatus);
    } catch (err) {
      console.error("Error checking bluetooth status", err);
      setStatus("error");
    }
  };

  useEffect(() => {
    requestAndCheck();
  }, []);

  const checkBt = async () => {
    try {
      // Now safe to call isEnabled
      console.log("BluetoothSerial:", BluetoothSerial);
      const response: BluetoothState = await BluetoothSerial.isEnabled();
      const newStatus = response.enabled ? "enabled" : "disabled";
      setStatus(newStatus);
      console.log(`Bluetooth is ${newStatus}`);
    } catch (err) {
      console.error("Error checking bluetooth status", err);
      setStatus("error");
    }
  };

  useEffect(() => {
    async function checkBluetooth() {
      try {
        // Now safe to call isEnabled
        console.log("BluetoothSerial:", BluetoothSerial);
        const response: BluetoothState = await BluetoothSerial.isEnabled();
        const newStatus = response.enabled ? "enabled" : "disabled";
        setStatus(newStatus);
        console.log(`Bluetooth is ${newStatus}`);
      } catch (err) {
        console.error("Error checking bluetooth status", err);
        setStatus("error");
      }
    }

    checkBluetooth();
  }, []);

  return (
    <div>
      SettingsPage: {status} <button onClick={checkBt}>asdasd</button>
    </div>
  );
};

export default SettingsPage;
