import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@richter/loan-application",
  app: () =>
    System.import(
      "@richter/loan-application"
    ),
  activeWhen: ["/loan-application"],
});

registerApplication({
  name: "@richter/success",
  app: () =>
    System.import(
      "@richter/success"
    ),
  activeWhen: ["/success"],
});

// registerApplication({
//   name: "@richter/navbar",
//   app: () => System.import("@richter/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
