function pianoSounds() {
    // створила функцію для фортепіано
    let piano = document.getElementById("piano");
    let pianoIcon = document.getElementById("pianoIcon");
    // оголошую змінні та присвоюю до елементів із html документу(файлу) 
    pianoIcon.onclick = function () {
        // роблю так, щоб при кліку на елемент із айді pianoIcon виконувалась функцію
        // створила перевірку, яка полягає в тому, що коли аудіо вмк чи вимк буде відповідне фото та включений/ вимкнений звук 
        if (piano.paused) {
            var forte = new Audio('piano-song-the-entertainer.mp3');
            // створила змінну та присвоїла до об'єкту аудіо
            forte.play();
            // виконую функцію, щоб грала музика
            pianoIcon.src = "images/piano-pause.png";
            // фото, коли грає
        } else {
            piano.pause();
            // виконую функцію, щоб не грала музика
            pianoIcon.src = "images/piano-play.png";
            // фото, коли на паузі
        }
    }
    // ще одна перевірка із такою самою логікою, як у попередньої, тільки ця буде запускатись як тільки викличемо функцію для фортепіано (pianoSounds)
    // а потім акутивується властивість із кліком на фото
    if (piano.paused) {
        piano.play();
        // виконую функцію, щоб грала музика
        pianoIcon.src = "images/piano-pause.png";
        // фото, коли грає

    } else {
        piano.pause();
        // виконую функцію, щоб не грала музика
        pianoIcon.src = "images/piano-play.png";
        // фото, коли на паузі
    }
}
// далі я створила ідентично аналогічні функції для решта інструментів
function guitarSounds() {
    let guitar = document.getElementById("guitar");
    let guitarIcon = document.getElementById("guitarIcon");

    guitarIcon.onclick = function () {
        if (guitar.paused) {
            guitar.play();
            // можна було б і далі використовувати об'єкт аудіо, але мені більше сподобалось таким чином робити
            guitarIcon.src = "images/guitar-pause.png";
        } else {
            guitar.pause();
            guitarIcon.src = "images/guitar-play.png";
        }
    }
    if (guitar.paused) {
        guitar.play();
        guitarIcon.src = "images/guitar-pause.png";
    } else {
        guitar.pause();
        guitarIcon.src = "images/guitar-play.png";
    }
}
function violinSounds() {
    let violin = document.getElementById("violin");
    let violinIcon = document.getElementById("violinIcon");

    violinIcon.onclick = function () {
        if (violin.paused) {
            violin.play();
            violinIcon.src = "images/violin-pause.png";
        } else {
            violin.pause();
            violinIcon.src = "images/violin-play.png";
        }
    }
    if (violin.paused) {
        violin.play();
        violinIcon.src = "images/violin-pause.png";
    } else {
        violin.pause();
        violinIcon.src = "images/violin-play.png";
    }
}
function drumsSounds() {
    let drums = document.getElementById("drums");
    let drumsIcon = document.getElementById("drumsIcon");

    drumsIcon.onclick = function () {
        if (drums.paused) {
            drums.play();
            drumsIcon.src = "images/drums-pause.png";
        } else {
            drums.pause();
            drumsIcon.src = "images/drums-play.png";
        }
    }
    if (drums.paused) {
        drums.play();
        drumsIcon.src = "images/drums-pause.png";
    } else {
        drums.pause();
        drumsIcon.src = "images/drums-play.png";
    }
}
// оскільки в завданні лабораторної роботи необхідно було виклористати switch, то я придумала зробити це таким чином:
// користувач повинен ввести число від 1-4, далі, коли він впише число, заграє інструмент із вибраним числом
// до цього як користувач вибере число функції інструментів не будуть активні, але після - так
// також, після вибору числа на екран спливе вікно, у якому повідомляється про назву інструмента та як його вимкнути
// діалогове вікно спливає через певний період часу(у моєму випадку 0.5 секунди) 
function switchFoo() {
    var number = document.getElementById("number").value;
    switch (number) {
        case "1":
            setTimeout("alert('Фортепіано. Для паузи клікни на фото з номером 1')", 500);
            pianoSounds();
            break;
        case "2":
            setTimeout("alert('Гітара. Для паузи клікни на фото з номером 2')", 500);
            guitarSounds();
            break;
        case "3":
            setTimeout("alert('Скрипка. Для паузи клікни на фото з номером 3')", 500);
            violinSounds();
            break;
        case "4":
            setTimeout("alert('Барабани. Для паузи клікни на фото з номером 4')", 500);
            drumsSounds();
            break;
    }
}