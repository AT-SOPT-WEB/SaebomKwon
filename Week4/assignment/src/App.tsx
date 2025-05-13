import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Global, ThemeProvider } from "@emotion/react";
import { globalStyles } from "@/styles/global";
import theme from "@/styles/theme";
import route from "@/routes/route";

const router = createBrowserRouter(route);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <Global styles={globalStyles} />
    </ThemeProvider>
  );
}
export default App;
