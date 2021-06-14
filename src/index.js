import "./styles.css";

const targetNode = document.body;

const mutationObserverConfig = {
  attributes: true,
  childList: true,
  subtree: true
};

const observer = new MutationObserver(function (records) {
  for (const record of records) {
    if (record.type === "childList") {
      for (const node of Array.from(record.addedNodes)) {
        if (node.querySelectorAll) {
          console.log(node);
        }
      }
    }
  }
});

observer.observe(targetNode, mutationObserverConfig);

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
