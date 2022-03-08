let movies = ['Initial D', 'Rascal Does Not Dream of Bunny Girl Senpai', 'JoJo no Kimyou na Bouken Part 6: Stone Ocean'];
let current = 'Initial D';

let element = document.getElementsByClassName("element");
let title = document.getElementById("title");
let info = document.getElementById("info");
let actor1 = document.getElementById("actor1");
let actor2 = document.getElementById("actor2");
let actor3 = document.getElementById("actor3");
let description = document.getElementById("description");
let image = document.getElementById("imageSource");

function AOT() {
    if (current == "Initial D")
        return;
    else {
        current = "Initial D";
        update();
    }
}

function KNY() {
    if (current == "Rascal Does Not Dream of Bunny Girl Senpai")
        return;
    else {
        current = "Rascal Does Not Dream of Bunny Girl Senpai";
        update();
    }
}

function jojo() {
    if (current == "JoJo no Kimyou na Bouken Part 6: Stone Ocean")
        return;
    else {
        current = "JoJo no Kimyou na Bouken Part 6: Stone Ocean";
        update();
    }
}

function update() {
    if (current === movies[0]) {
        for (let i = 0; i < element.length; i++) {
            element[i].style.backgroundColor = "#97B3DA";
            element[i].style.borderLeft = 'none';
            element[i].style.borderTopLeftRadius = '10px';
            element[i].style.borderBottomLeftRadius = '10px';
        }
        document.getElementById('Initial D').style.borderLeft = 'solid 3.9px #b6d5ff';
        document.getElementById('Initial D').style.borderTopLeftRadius = '2px';
        document.getElementById('Initial D').style.borderBottomLeftRadius = '2px';
        title.innerText = "Initial D"
        info.innerHTML = "PG-13 &nbsp;&nbsp;&#124&nbsp;&nbsp; 5 seasons &nbsp;&nbsp;&#124&nbsp;&nbsp; Shounen, Sport, Cars, Drama &nbsp;&nbsp;&#124&nbsp;&nbsp; 1998";
        actor1.innerText = "Takumi Fujiwara";
        actor2.innerText = "Bunta Fujiwara";
        actor3.innerText = "Ryosuke Takahashi";
        description.innerText = "The plot focuses on the world of illegal Japanese mountain street racing (toge). The main action takes place on mountain slopes. The main events of the series take place in the Japanese prefecture of Gunma in the mountains of the Kanto region and nearby urban areas. Although many of the local names have been changed, all events take place in real Japanese territories. In racing, great attention is paid to the technique of cornering, the theory of sports driving and the technical features of cars in relation to racing. To increase the credibility of the plot, the king of drift Keiichi Tsuchiya was involved, who advised the scriptwriters, gave permission to show some episodes of his Drift Bible and voiced Bunta's old friend, a professional racer";
        crossfade("https://upload.wikimedia.org/wikipedia/ru/thumb/2/26/Initial_D_manga.jpg/460px-Initial_D_manga.jpg?resize=724,1024");
    } else if (current === movies[1]) {
        for (let i = 0; i < element.length; i++) {
            element[i].style.backgroundColor = "#C13128";
            element[i].style.borderLeft = 'none';
            element[i].style.borderTopLeftRadius = '15px';
            element[i].style.borderBottomLeftRadius = '15px';
        }
        document.getElementById('Rascal Does Not Dream of Bunny Girl Senpai').style.borderLeft = 'solid 4px #284791';
        document.getElementById('Rascal Does Not Dream of Bunny Girl Senpai').style.borderTopLeftRadius = '2px';
        document.getElementById('Rascal Does Not Dream of Bunny Girl Senpai').style.borderBottomLeftRadius = '2px';
        title.innerText = "Rascal Does Not Dream of Bunny Girl Senpai"
        info.innerHTML = "PG-13  &nbsp;&nbsp;&#124&nbsp;&nbsp; 1 season &nbsp;&nbsp;&#124&nbsp;&nbsp; Shounen, Acion, Adventure &nbsp;&nbsp;&#124&nbsp;&nbsp; 2018";
        actor1.innerText = "Sakuta Azusagawa";
        actor2.innerText = "Mai Sakurajima";
        actor3.innerText = "Rio Futaba";
        description.innerText = "Unremarkable high school student Sakuta Azusagawa spends all his free time in the library, reading books. One day he meets a girl in a rabbit costume who is a year older than him. She introduces herself as Mai Sakurajima, a famous actress and the first beauty of the school. The girl says that everyone around her stopped seeing her, so she dressed so provocatively and went to Sakuta to help her. According to Mai, this is all because of the mysterious puberty syndrome. Azusagawa, without hesitation, decides to help Sakurajima in solving this strange problem. However, who could have known what it would turn into ...";
        crossfade("./assets/images/556072.jpeg")
    } else if (current === movies[2]) {
        for (let i = 0; i < element.length; i++) {
            element[i].style.backgroundColor = "#43de96";
            element[i].style.borderLeft = 'none';
            element[i].style.borderTopLeftRadius = '15px';
            element[i].style.borderBottomLeftRadius = '15px';
        }
        document.getElementById('JoJo no Kimyou na Bouken Part 6: Stone Ocean').style.borderLeft = 'solid 3.9px #2B0908';
        document.getElementById('JoJo no Kimyou na Bouken Part 6: Stone Ocean').style.borderTopLeftRadius = '2px';
        document.getElementById('JoJo no Kimyou na Bouken Part 6: Stone Ocean').style.borderBottomLeftRadius = '2px';
        title.innerText = "JoJo no Kimyou na Bouken Part 6: Stone Ocean"
        info.innerHTML = "R-17+ &nbsp;&nbsp;&#124&nbsp;&nbsp; 6 seasons &nbsp;&nbsp;&#124&nbsp;&nbsp; Shounen, Acion, Adventure &nbsp;&nbsp;&#124&nbsp;&nbsp; 2021";
        actor1.innerText = "Daisuke Ono";
        actor2.innerText = "Mutsumi Tamura";
        actor3.innerText = "Mariya Ise";
        description.innerText = "JoJo Part 6 is the newest release in JoJo’s Bizarre Adventure, an anime Japanese manga graphic novel series. Stone Ocean is the sixth story arc in the JoJo adventure series. Fans have been patiently waiting for the release. So, will Stone Ocean be animated? Yes! We can confirm JoJo part 6 was confirmed! The anime will star Ai Fairouz as Jolyne. Here’s everything you need to know including the plot storyline, watch the teaser trailer, gain fan insight, and so much more!";
        crossfade("https://s1.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2021/08/Poster-Neveroyatnye-priklyucheniya-DzhoDzho-467x697.jpg");
    }
}

function crossfade(name) {
    setTimeout(() => image.classList.add("crossfade"), 200);
    setTimeout(() => image.src = name, 250);
    setTimeout(() => image.classList.remove("crossfade"), 300);
}