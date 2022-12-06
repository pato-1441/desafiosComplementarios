import { Router } from "express";
import passport from "passport";
import Authenticated from "../middlewares/authenticate.js"

const passportAuthsRouter = Router();

// get

passportAuthsRouter.get("/failregister", (req, res) => {
  res.render("register-error", {});
});
passportAuthsRouter.get("/faillogin", (req, res) => {
  res.render("login-error", {});
});

passportAuthsRouter.get("/register", (req, res) => {
  res.render("register");
});

passportAuthsRouter.get("/logout", (req, res) => {
  const { username } = req.user;
  req.logout();
  res.render("logout", { username });
});

passportAuthsRouter.get("/login", Authenticated, (req, res) => {
  res.render("login");
});
passportAuthsRouter.get("/", Authenticated, (req, res) => {
  res.redirect("login");
});

//post

passportAuthsRouter.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/faillogin" }),
  (req, res) => {
    res.redirect("/");
  }
);

passportAuthsRouter.post(
  "/register",
  passport.authenticate("register", { failureRedirect: "/failregister" }),
  (req, res) => {
    res.redirect("/");
  }
);

export default passportAuthsRouter;
