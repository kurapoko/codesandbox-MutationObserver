import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const targetNode = document.body;

const config = { attributes: true, childList: true, subtree: true };

(function () {
  const observer = new MutationObserver(function () {
    console.log("aaaaa");
  });

  observer.observe(targetNode, config);

  setTimeout(() => {
    targetNode.innerHTML = `
    <div>aaaaaa</div>
    `;
  }, 1000);
})();
