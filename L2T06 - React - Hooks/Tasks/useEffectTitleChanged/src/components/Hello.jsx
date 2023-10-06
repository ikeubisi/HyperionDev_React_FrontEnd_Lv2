import { useEffect } from "react";

export default function Hello() {
  useEffect(() => {
    console.log("Hello from the Hello component!!!");
  }, []);

  return <div>Hello from the Hello component</div>;
}
