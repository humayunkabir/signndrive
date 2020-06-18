import HomePage from "../pages/home.f7.html";
import AboutPage from "../pages/about.f7.html";
import FeedbackPage from "../pages/feedback.f7.html";
import FaqPage from "../pages/faq.f7.html";
import FormPage from "../pages/form.f7.html";
import ProfilePage from "../pages/profile.f7.html";
import ProfileManagerPage from "../pages/profile-manager.f7.html";
import ForumPage from "../pages/forum.f7.html";
import VehiclePage from "../pages/vehicle.f7.html";
import VehicleDetailsPage from "../pages/vehicle-details.f7.html";
import SignInPage from "../pages/signin.f7.html";
import PasswordChangePage from "../pages/password-change.f7.html";
import SignUpPage from "../pages/signup.f7.html";
import ExamplePage from "../pages/example.f7.html";
import ApplicationPage from "../pages/application.f7.html";
import NotificationPage from "../pages/notification.f7.html";
import BrandPage from "../pages/brand.f7.html";

import DynamicRoutePage from "../pages/dynamic-route.f7.html";
import RequestAndLoad from "../pages/request-and-load.f7.html";
import NotFoundPage from "../pages/404.f7.html";

var routes = [
  {
    path: "/",
    component: BrandPage,
  },
  {
    path: "/home/",
    component: HomePage,
  },
  {
    path: "/signin/",
    component: SignInPage,
  },
  {
    path: "/signup/",
    component: SignUpPage,
  },
  {
    path: "/password-change/",
    component: PasswordChangePage,
  },
  {
    path: "/about/",
    component: AboutPage,
  },
  {
    path: "/feedback/",
    component: FeedbackPage,
  },
  {
    path: "/faq/",
    component: FaqPage,
  },
  {
    path: "/form/",
    component: FormPage,
  },
  {
    path: "/profile/",
    component: ProfilePage,
  },
  {
    path: "/profile-manager/",
    component: ProfileManagerPage,
  },
  {
    path: "/forum/",
    component: ForumPage,
  },
  {
    path: "/vehicle/",
    component: VehiclePage,
  },
  {
    path: "/vehicle/details/",
    component: VehicleDetailsPage,
  },
  {
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    component: DynamicRoutePage,
  },
  {
    path: "/example/",
    component: ExamplePage,
  },
  {
    path: "/application/",
    component: ApplicationPage,
    tabs: [
      {
        path: "/",
        id: "tab-application-address",
      },
      {
        path: "/tab-application-employment",
        id: "tab-application-employment",
      },
      {
        path: "/tab-application-question-answer",
        id: "tab-application-question-answer",
      },
    ],
  },
  {
    path: "/notification/",
    component: NotificationPage,
  },
  {
    path: "/request-and-load/user/:userId/",
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: "Vladimir",
          lastName: "Kharlampidi",
          about: "Hello, i am creator of Framework7! Hope you like it!",
          links: [
            {
              title: "Framework7 Website",
              url: "http://framework7.io",
            },
            {
              title: "Framework7 Forum",
              url: "http://forum.framework7.io",
            },
          ],
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            },
          }
        );
      }, 1000);
    },
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
