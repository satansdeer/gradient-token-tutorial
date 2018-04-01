import { Router } from "director";
import { autorun } from "mobx";

export function startRouter(store) {
  // update state on url change
  const router = new Router({
    "/:tokenId": id => store.showDocument(id),
    "/tokens/": () => store.showTokens()
  })
    .configure({
      notfound: () => store.showOverview(),
      html5history: true
    })
    .init();

  // update url on state changes
  autorun(() => {
    const path = store.currentPath;
    if (path !== window.location.pathname)
      window.history.pushState(null, null, path);
  });
}
