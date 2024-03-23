import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import SignupComponent from "./components/SignUp/SignupComponent";
// import AboutComponent from "./components/About/AboutComponent";
import CartComponent from "./components/Cart/CartComponent";
import PageNotFoundComponent from "./components/PageNotFound/PageNotFoundComponent";
import BodyComponent from "./components/Body/BodyComponent";
import RestaurantComponent from "./components/Restaurant/RestaurantComponent";
import { Provider } from "react-redux";
import appStore from "./store/AppStore";

const AboutComponent = lazy(() => import("./components/About/AboutComponent"));
const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/cart",
        element: <CartComponent />,
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<h1>Loading...!!!</h1>}>
            <AboutComponent />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: <SignupComponent />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantComponent />,
      },
    ],
    errorElement: <PageNotFoundComponent />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRoutes} />
  </Provider>
);
