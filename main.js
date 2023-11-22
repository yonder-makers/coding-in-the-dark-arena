const players = [
  {
    name: "Person 1",
    url: "add_url",
    img: "dog.jpg",
  },
  {
    name: "Person 2",
    url: "add_url",
    img: "dog.jpg",
  },
  {
    name: "Person 3",
    url: "add_url",
    img: "dog.jpg",
  },
  {
    name: "Person 4",
    url: "add_url",
    img: "dog.jpg",
  },
  {
    name: "Person 5",
    url: "add_url",
    img: "dog.jpg",
  },
  {
    name: "Person 6",
    url: "add_url",
    img: "dog.jpg",
  },
  {
    name: "Person 7",
    url: "add_url",
    img: "dog.jpg",
  },
  {
    name: "Person 8",
    url: "add_url",
    img: "dog.jpg",
  },
  {
    name: "Person 9",
    url: "add_url",
    img: "dog.jpg",
  },
  {
    name: "Person 10",
    url: "add_url",
    img: "dog.jpg",
  },
  {
    name: "Person 11",
    url: "add_url",
    img: "dog.jpg",
  },
  {
    name: "Person 12",
    url: "add_url",
    img: "dog.jpg",
  },
  {
    name: "Person 13",
    url: "add_url",
    img: "dog.jpg",
  },
];

const container = document.getElementById("container");
const playersContainer = document.getElementById("playersContainer");

players.forEach(function (player) {
  const div = document.createElement("div");
  div.innerHTML = `<img src=./static/${player.img}><span id='name'>${player.name}</span>`;
  div.addEventListener("click", function () {
    openIframe(player);
    openWatchingStatus(player);
  });
  playersContainer.appendChild(div);
});

function openIframe(player) {
  const iframe = document.createElement("iframe");
  iframe.src = player.url;
  const iframeContainer = document.getElementById("iframeContainer");

  while (iframeContainer.firstChild) {
    iframeContainer.removeChild(iframeContainer.firstChild);
  }

  iframeContainer.appendChild(iframe);
  iframeContainer.style.display = "flex";
  container.style.background = "rgba(0, 0, 0, 0.3)";
}

document.addEventListener("click", function (event) {
  const iframeContainer = document.getElementById("iframeContainer");

  if (iframeContainer.contains(event.target)) {
    iframeContainer.style.display = "none";
    container.style.background = "none";
    closeWatchingStatus();
  }
});

function openWatchingStatus(player) {
  document.getElementById(
    "watchingStatus"
  ).textContent = `Now watching ${player.name}`;

  document.getElementById("watchingStatus").style.display = "block";
}

function closeWatchingStatus() {
  document.getElementById("watchingStatus").style.display = "none";
}
