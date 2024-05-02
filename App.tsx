import { NativeBaseProvider } from "native-base";
import { Routes } from "./src/Router/Index";

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes/>
    </NativeBaseProvider>

  );
}