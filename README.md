[script.js](https://github.com/user-attachments/files/24332241/script.js)[index.html](https://github.com/user-attachments/files/24332237/index.html)
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>YouTube</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body class="dark">
    <header class="navbar">
      <img src="images/logo.png" class="logo" />
      <input type="text" placeholder="Search" />
    </header>

    <div class="l* {[Uploading const params = new URLSearchParams(window.location.search);
const vid = params.get("vid");

if (vid) {
  document.getElementById("player").src =
    "https://www.youtube.com/embed/" + vid;
}
script.js…]()

  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

body.dark {
  background: #0f0f0f;
  color: white;
}

.navbar {
  background: #212121;
  padding: 10px;
  display: flex;
  align-items: center;
}

.logo {
  height: 25px;
}

.navbar input {
  margin-left: 20px;
  padding: 6px;
  background: #121212;
  border: 1px solid #303030;
  color: white;
}

.layout {
  display: flex;
}

.sidebar {
  width: 200px;
  background: #181818;
  padding: 15px;
}

.sidebar p {
  margin-bottom: 15px;
  cursor: pointer;
}

.videos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  color: white;
  text-decoration: none;
}

.card img {
  width: 100%;
  border-radius: 10px;
}

.watch {
  padding: 20px;
}

iframe {
  width: 100%;
  height: 400px;
  border-radius: 10px;
}

.actions {
  margin: 10px 0;
}

.channel {
  display: flex;
  align-items: center;
  margin: 15px 0;
}

.channel img {
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.comments {
  margin-top: 20px;
}
[style.css](https://github.com/user-attachments/files/24332240/style.css)
ayout">
      <aside class="sidebar">
        <p>🏠 Home</p>
        <p>▶ Shorts</p>
        <p>📺 Subscriptions</p>
      </aside>

      <main class="videos">
        <a href="watch.html?vid=dQw4w9WgXcQ" class="card">
          <img src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" />
          <h4>Never Gonna Give You Up</h4>
          <p>Rick Astley • 1B views</p>
        </a>

        <a href="watch.html?vid=9bZkp7q19f0" class="card">
          <img src="https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg" />
          <h4>Gangnam Style</h4>
          <p>PSY • 4.8B views</p>
        </a>
      </main>
    </div>
  </body>
</html>
