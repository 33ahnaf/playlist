let songs = [
    { song_name: "Safe and Sound", author_name: "Capital Cities", file_path: "Safe and Sound.mp4" },
    { song_name: "Resonance", author_name: "HOME", file_path: "HOME - Resonance.mp4" },
    { song_name: "Hurts So Good", author_name: "Astrid S", file_path: "Hurts So Good.mp4" },
    { song_name: "After Dark", author_name: "Mr. Kitty", file_path: "After Dark.mp4" },
    { song_name: "Alone, Pt. II", author_name: "Alan Walker & Ava Max", file_path: "Alone, Pt. II.mp4" },
    { song_name: "Moonlight", author_name: "Kali Uchis", file_path: "Moonlight.mp4" },
    { song_name: "Talking to the Moon", author_name: "Bruno Mars", file_path: "Talking To The Moon.mp4" },
    { song_name: "Dandelions", author_name: "Ruth B.", file_path: "Dandelions.mp4" },
    { song_name: "Lovers Rock", author_name: "TV Girl", file_path: "Lovers Rock.mp4" },
    { song_name: "Love Me Again", author_name: "John Newman", file_path: "Love Me Again.mp4" },
    { song_name: "Dancefloor Dreamer", author_name: "NIVIRO", file_path: "NIVIRO - Dancefloor Dreamer.mp4" },
    { song_name: "Dreaveler", author_name: "Pensees", file_path: "Dreaveler.mp4" },
    { song_name: "Skyfall", author_name: "Adele", file_path: "Skyfall.mp4" },
    { song_name: "CODER", author_name: "Astrofusion", file_path: "CODER.mp4" },
    { song_name: "Death Is No More", author_name: "BLESSED MANE", file_path: "Death Is No More.mp4" },
    { song_name: "Drugs", author_name: "OBESØN", file_path: "Drugs.mp4" },
    { song_name: "Lost Soul", author_name: "NBSPLV", file_path: "Lost Soul.mp4" },
    { song_name: "FE!N", author_name: "Travis Scott", file_path: "FE!N.mp4" },
    { song_name: "Fluxxwave", author_name: "Clovis Reyes", file_path: "Fluxxwave.mp4" },
    { song_name: "Hung Up", author_name: "Madonna", file_path: "Hung Up.mp4" },
    { song_name: "La Câlin", author_name: "Serhat Durmus", file_path: "La Calin.mp4" },
    { song_name: "Midnight City", author_name: "M83", file_path: "Midnight City.mp4" },
    { song_name: "Moral of the Story", author_name: "Ashe", file_path: "Moral of the Story.mp4" },
    { song_name: "Who is She", author_name: "I Monster", file_path: "Who Is She.mp4" },
    { song_name: "The Perfect Girl", author_name: "Mareux", file_path: "The Perfect Girl.mp4" },
    { song_name: "Next To You", author_name: "Øneheart", file_path: "Next to You.mp4" },
    { song_name: "Old Town Road", author_name: "Lil Nas X", file_path: "Old Town Road.mp4" },
    { song_name: "Past Lives", author_name: "Slushii and sapientdream", file_path: "Past Lives.mp4" },
    { song_name: "Play Date", author_name: "Melanie Martinez", file_path: "Play Date.mp4" },
    { song_name: "Runaway", author_name: "AURORA", file_path: "Runaway.mp4" },
    { song_name: "Señorita", author_name: "Shawn Mendes & Camila Cabello", file_path: "Senorita.mp4" },
    { song_name: "Shape of You", author_name: "Ed Sheeran", file_path: "Shape of You.mp4" },
    { song_name: "Shootout", author_name: "Izzamuzzic & Julien Marchal", file_path: "Shootout.mp4" },
    { song_name: "The Last of Us", author_name: "Gustavo Santaolalla", file_path: "The Last of Us Theme Song.mp4" },
    { song_name: "The Lost Soul Down", author_name: "NBSPLV", file_path: "The Lost Soul Down.mp4" },
    { song_name: "GANGSTA'S PARADISE", author_name: "Coolio", file_path: "https://www.youtube.com/watch?v=NMNsvyDbdMQ" },
];

let mainDiv = document.getElementById("main-div");
let content = "";

function mainRenderer() {
    songs.forEach(song => {
        const song_card = document.createElement("div");
        song_card.className = "track";
        song_card.innerHTML = `
            <p class="music-name"><strong>${song.song_name}</strong></p>
            <p class="author-name">by <strong>${song.author_name}</strong></p>
        `;
        song_card.onclick = () => playerRenderer(song);
        mainDiv.appendChild(song_card);
    });
}

function playerRenderer(song) {
    if(song.song_name == "GANGSTA'S PARADISE"){
        window.location.href = `${song.file_path}`;
    }else{
        mainDiv.innerHTML = `
            <div class="song">
                <h2>${song.song_name}</h2>
                <video width="300px" controls><source src="${song.file_path}" type="video/mp4">
                    Something went wrong!
                </video>
            </div>
            <div style="text-align: center;"><button id="back-btn">Back to songs</button></div>
            `;
        const back_button = document.getElementById("back-btn");
        back_button.addEventListener("click", goBack);
    }
}

function goBack() {
    mainDiv.innerHTML = "";
    mainRenderer();
}

mainRenderer();
