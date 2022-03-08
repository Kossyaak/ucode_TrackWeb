class Human {
    constructor(firstName, lastName, gender, age, calories) {
        this.firstName = firstName || "unknown"
        this.lastName = lastName || "unknown"
        this.gender = gender || "unknown"
        this.age = age || "unknown"
        this.calories = calories || 250

        this.intervals() 
    }

    intervals() {
        this.id1 = setInterval(() => {
            this.calories -= 200

            if (this.calories < 0) {
                this.calories = 0
            }

        }, 60000)

        this.id2 = setInterval(() => {
            let status = document.getElementById("status").innerHTML

            if (status !== "После спринта надо нормально поспать, я сплю" && status !== "ммм Мивинка") {
                if (this.calories < 500) {
                    document.getElementById("status").innerHTML="Я ГОЛОДЕН"
                }
                else {
                    document.getElementById("status").innerHTML="Я пакушал"
                }
            }
        }, 5000)

        this.id3 = setInterval(() => {
            document.getElementById("firstName").innerHTML=this.firstName
            document.getElementById("lastName").innerHTML=this.lastName
            document.getElementById("gender").innerHTML=this.gender
            document.getElementById("age").innerHTML=this.age
            document.getElementById("calories").innerHTML=this.calories

            if (this.calories < 500) {
                document.getElementById("turnIntoSuperheroButton").disabled=true
            }
            else {
                document.getElementById("turnIntoSuperheroButton").disabled=false
            }
        }, 500)
    }

    sleepFor() {
        document.getElementById("status").innerHTML="После спринта надо нормально поспать, я сплю"   
        document.getElementById("button-feed").disabled=true
        let secondsCount = document.getElementById("seconds-count").value

        setTimeout(() => {
            document.getElementById("status").innerHTML="ОПАЗДЫВАЮ НА ПУШ, НАДО БЫСТРЕЕ"
            document.getElementById("button-feed").disabled=false
        }, secondsCount * 1000) 

    }

    feed() {
        document.getElementById("status").innerHTML = "ммм Мивинка"
        document.getElementById("button-sleep").disabled=true

        setTimeout(() => {
            this.calories += 200
            document.getElementById("button-sleep").disabled=false
            document.getElementById("status").innerHTML="ОПАЗДЫВАЮ НА ПУШ, НАДО БЫСТРЕЕ"
        }, 10 * 1000) 
    }

    cleanAll() {
        setTimeout(() => { 
            clearInterval(id1)
            clearInterval(id2)
            clearInterval(id3)
        }, 1)
    }

}

class Superhero extends Human { 
    constructor(firstName, lastName, gender, age, calories) {
        super(firstName, lastName, gender, age, calories)
        this.cleanAll()
    }

    fly() {
        status = document.getElementById("status2").innerHTML = "Лечу получать 0 потому что /no new line"

        document.getElementById("button-sleep2").disabled = true
        document.getElementById("button-feed2").disabled = true
        document.getElementById("button-fight2").disabled = true

        setTimeout(() => {
            document.getElementById("button-sleep2").disabled = false
            document.getElementById("button-feed2").disabled = false
            document.getElementById("button-fight2").disabled = false
            status = document.getElementById("status2").innerHTML = "ОПАЗДЫВАЮ НА ПУШ, НАДО БЫСТРЕЕ"
        }, 10 * 1000)
    }

    fightWithEvil() {
        document.getElementById("button-sleep2").disabled = true
        document.getElementById("button-feed2").disabled = true
        document.getElementById("button-fly2").disabled = true
        status = document.getElementById("status2").innerHTML = "ОРАКЛ, ТЕБЕ ХАНА бах бах zsh:segmentation fault"
        setTimeout(() => {
            document.getElementById("button-sleep2").disabled = false
            document.getElementById("button-feed2").disabled = false
            document.getElementById("button-fly2").disabled = false
            status = document.getElementById("status2").innerHTML = "ОПАЗДЫВАЮ НА ПУШ, НАДО БЫСТРЕЕ"
        }, 10 * 1000)
    }
    intervals() {
        this.id1 = setInterval(() => {
            this.calories -= 200

            if (this.calories < 0) {
                this.calories = 0
            }

        }, 60000)

        this.id3 = setInterval(() => {
            document.getElementById("firstName2").innerHTML=this.firstName
            document.getElementById("lastName2").innerHTML=this.lastName
            document.getElementById("gender2").innerHTML=this.gender
            document.getElementById("age2").innerHTML=this.age
            document.getElementById("calories2").innerHTML=this.calories
        }, 500)
    }

    sleepFor() {
        document.getElementById("status2").innerHTML="После спринта надо нормально поспать, я сплю"   
        document.getElementById("button-feed2").disabled=true
        document.getElementById("button-fly2").disabled = true
        document.getElementById("button-fight2").disabled = true
        let secondsCount = document.getElementById("seconds-count2").value

        setTimeout(() => {
            document.getElementById("status2").innerHTML="ОПАЗДЫВАЮ НА ПУШ, НАДО БЫСТРЕЕ"
            document.getElementById("button-feed2").disabled=false
            document.getElementById("button-fly2").disabled = false
            document.getElementById("button-fight2").disabled = false
        }, secondsCount * 1000) 

    }

    feed() {
        document.getElementById("status2").innerHTML = "ммм Мивинка"
        document.getElementById("button-sleep2").disabled=true
        document.getElementById("button-fly2").disabled = true
        document.getElementById("button-fight2").disabled = true

        setTimeout(() => {
            this.calories += 200
            document.getElementById("button-sleep2").disabled=false
            document.getElementById("button-fly2").disabled = false
            document.getElementById("button-fight2").disabled = false
            document.getElementById("status2").innerHTML="ОПАЗДЫВАЮ НА ПУШ, НАДО БЫСТРЕЕ"
        }, 10 * 1000) 
    }


}

function turnIntoSuperheroButton(human) {
    human.cleanAll()
    thor = new Superhero(human.firstName, human.lastName, 
                human.gender, human.age, human.calories)   

    document.getElementById("image").src = "assets/images/ira1.jpg"

    document.getElementById("SuperheroCard").style.display = "block"
    document.getElementById("SuperheroCard").disabled = false

    document.getElementById("HumanCard").style.display = "none"
    document.getElementById("HumanCard").disabled = true

}


// main logic
human = new Human(prompt("Введите имя"), 
                    prompt("Фамилия?"), 
                    prompt("Гендер"), 
                    Number(prompt("Сколько тебе лет?")), 
                    Number(prompt("Сколько поел сегодня? Число каллорий")));

