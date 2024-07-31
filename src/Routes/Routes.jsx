import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home Page/Home";
import EventDetails from "../Pages/Home Page/Events/EventDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import AllEvents from "../Pages/AllEventsPage/AllEvents";
import PrivateRoute from "./PrivateRoute";
import AddEvent from "../Pages/AddEvent";
import Register from "../Pages/EventRegister";
import MyEvents from "../Pages/MyEvents";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: (
          <>
            
              <title>Kits for Kids | Login</title>
            
            <Login></Login>
          </>
        )
      },
      {
        path: 'signup',
        element: (
          <>
       
              <title>Kits for Kids | Sign Up</title>
            
            <SignUp></SignUp>
          </>
        )
      },
      {
        path: 'events',
        element: (
          <> 
            <AllEvents/>
          </>
        )
      },
      {
        path: "events/:id",
        element: <PrivateRoute><EventDetails /></PrivateRoute>,
        loader: async ({ params }) => {
          const response = await fetch('http://localhost:8000/events');
          const data = await response.json();
          const event = data.find(event => event._id === params.id);
          if (!event) {
            throw new Response('Event not found', { status: 404 });
          }
          return { event };
        }
      },
      {
        path: "createevent",
        element: (
          <>
            <PrivateRoute><AddEvent/></PrivateRoute>
          </>
        )
      },
      {
        path: "myevent",
        element: (
          <>
            <PrivateRoute><MyEvents/></PrivateRoute>
          </>
        )
      },
      {
        path: "blog",
        element: (
          <>
            
          </>
        )
      },
      {
        path: 'register/:eventId',
        element: (
          <>
            
            <PrivateRoute><Register /></PrivateRoute>
          </>
        ),
        loader: async ({ params }) => {
          const response = await fetch('http://localhost:8000/events/');
          const data = await response.json();
          const event = data.find((event) => event._id === params.eventId);
          if (!event) {
            throw new Response('Event not found', { status: 404 });
          }
          return { event };
        }
      }
    ]
  }
]);

export default router;
