import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Detailspage from "../Pages/Detailspage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "details/:id",
    element: <Detailspage />,
  },
]);

export default router
