import { keepTheme } from "keep-react/keepTheme";
import daisyui from "daisyui";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  plugins: [daisyui],
};

export default keepTheme(config);
