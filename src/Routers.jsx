import { Outlet } from "react-router-dom";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import ContactInfo from "./components/pages/ContactInfo/ContactInfo";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import PropertyType from "./components/pages/PropertyType/PropertyType";

const router = [
  {
    path : '/',
    element: <>
      <Header />
      <Outlet />
      <Footer />
    </>,
    children: [
    { index: true, element: <LandingPage /> },
    { path: '/property-type', element: <PropertyType /> },
    { path: '/contact-info', element: <ContactInfo /> }
  ]
  }
];
export default router;