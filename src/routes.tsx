import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "./pages/_layouts/public";
import ProfilesList from "./pages/profiles-list";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <ProfilesList />,
      },
    ],
  },
]);
