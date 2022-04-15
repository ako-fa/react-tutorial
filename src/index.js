import "bulma/css/bulma.css";

import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.querySelector("#content");
const content = createRoot(container);
content.render(<App />);
