// function getSongs(mood) {
//   fetch("/recommend", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ mood: mood })
//   })
//   .then(res => res.json())
//   .then(data => {
//     let div = document.getElementById("songs");
//     div.innerHTML = "";

//     let msg = document.createElement("h3");
//     msg.textContent = data.message;
//     div.appendChild(msg);

//     data.songs.forEach(song => {

//       // 🔥 YouTube embed link convert
//       let videoId = song.link.split("v=")[1];
//       let embedUrl = `https://www.youtube.com/embed/${videoId}`;

//       let iframe = document.createElement("iframe");
//       iframe.width = "100%";
//       iframe.height = "200";
//       iframe.src = embedUrl;
//       iframe.allowFullscreen = true;

//       let title = document.createElement("p");
//       title.textContent = song.name;

//       div.appendChild(title);
//       div.appendChild(iframe);
//     });
//   });
// }
function getSongs(mood) {
  fetch("/recommend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ mood: mood })
  })
  .then(response => response.json())
  .then(data => {
    const div = document.getElementById("songs");
    div.innerHTML = "";

    data.songs.forEach(song => {
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.justifyContent = "space-between";
      row.style.alignItems = "center";
      row.style.margin = "8px 0";
      row.style.padding = "10px";
      row.style.background = "rgba(255,255,255,0.15)";
      row.style.borderRadius = "10px";

      // Song name
      const name = document.createElement("span");
      name.textContent = song.name;

      // Play button (YouTube link)
      const btn = document.createElement("a");
      btn.href = song.link;
      btn.target = "_blank";
      btn.textContent = "▶ Play";
      btn.style.textDecoration = "none";
      btn.style.background = "#fff";
      btn.style.color = "#333";
      btn.style.padding = "5px 12px";
      btn.style.borderRadius = "15px";
      btn.style.fontSize = "12px";

      row.appendChild(name);
      row.appendChild(btn);
      div.appendChild(row);
    });
  })
  .catch(err => console.log(err));
}