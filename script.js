function calculateTime(object) {
    const timeDistance = object.finishedAt - object.startedAt;
    return ((timeDistance / 1000) / 60 / 60);
}
function calculateTaskFinished(object) {
    return Math.floor((object.tasksFinished / object.tasksGiven) * 100);
}
function textCorrector(headerName){
    let fixedName = "";
    for (let i = 0; i < headerName.length; i++) {
        const char = headerName[i];
        if(headerName[i] === headerName[i].toUpperCase()){
            fixedName += " " + char;
            i++;
        }
        fixedName += headerName[i]
    }
    return fixedName;
}
function timeScale(num){
    if (num <= 4){
        return "low"
    } else if (num > 4 && num <= 8){
        return "mid"
    }
    else{
        return "high"
    }
}
function percentScale(num){
    if (num <= 50){
        return "low-per"
    } else if (num > 50 && num <= 75){
        return "mid-per"
    }
    else{
        return "high-per"
    }
}

let missions = [
    {
        startedAt: new Date("2021-01-20:13:00"),
        finishedAt: new Date("2021-01-20:19:00"),
        tasksGiven: 10,
        tasksFinished: 7,
        topic: "HTML"
    },
    {
        startedAt: new Date("2021-01-20:14:00"),
        finishedAt: new Date("2021-01-20:18:00"),
        tasksGiven: 8,
        tasksFinished: 7,
        topic: "CSS"
    },
    {
        startedAt: new Date("2021-01-20:09:00"),
        finishedAt: new Date("2021-01-20:20:00"),
        tasksGiven: 30,
        tasksFinished:21,
        topic: "HTML + CSS"
    },
    {
        startedAt: new Date("2021-01-20:15:00"),
        finishedAt: new Date("2021-01-20:19:30"),
        tasksGiven: 7,
        tasksFinished: 7,
        topic: "GitHub"
    },
    {
        startedAt: new Date("2021-01-20:14:30"),
        finishedAt: new Date("2021-01-20:20:00"),
        tasksGiven: 16,
        tasksFinished: 13,
        topic: "JavaScript - Intro"
    },
    {
        startedAt: new Date("2021-01-20:11:00"),
        finishedAt: new Date("2021-01-20:20:00"),
        tasksGiven: 34,
        tasksFinished: 12,
        topic: "JavaScript - If Statement"
    },
    {
        startedAt: new Date("2021-01-20:10:00"),
        finishedAt: new Date("2021-01-20:19:30"),
        tasksGiven: 29,
        tasksFinished: 15,
        topic: "JavaScript - Loop"
    },
    {
        startedAt: new Date("2021-01-20:12:00"),
        finishedAt: new Date("2021-01-20:14:30"),
        tasksGiven: 17,
        tasksFinished: 3,
        topic: "JavaScript - Arrays"
    },
    {
        startedAt: new Date("2021-01-20:14:00"),
        finishedAt: new Date("2021-01-20:19:00"),
        tasksGiven: 14,
        tasksFinished: 13,
        topic: "JavaScript - Functions"
    },
    {
        startedAt: new Date("2021-01-20:11:00"),
        finishedAt: new Date("2021-01-20:19:00"),
        tasksGiven: 25,
        tasksFinished: 20,
        topic: "JavaScript - Objects"
    }
]
for (const mission of missions) {
    mission.totalTime = calculateTime(mission);
    mission.tasksFinishedPercent = calculateTaskFinished(mission);
}

const table = document.createElement("table")
const tableContainer = document.createElement("tr")
const tbody = document.createElement("tbody")
for (const key in missions[0]) {
    if (Object.hasOwnProperty.call(missions[0], key)) {
        let keyName = key;
        if(keyName === "tasksFinishedPercent"){
            keyName = "tasksFinished %";
        }
        let tableHeader = document.createElement("th");
        tableHeader.textContent = textCorrector(keyName);
        tableContainer.append(tableHeader);
    }
}
tbody.append(tableContainer);
table.append(tbody);
document.body.append(table);

for (const mission of missions) {
    let tableContainer2 = document.createElement("tr");
    for (const key in mission) {
        let tableContent = document.createElement("td");
        let element = mission[key];
        if(key === "startedAt" || key === "finishedAt"){
            element = mission[key].toLocaleTimeString()
            tableContent.textContent = element;
        } else if(key === "totalTime"){
            tableContent.textContent = element;
            tableContent.className = timeScale(mission[key]);
        } else if(key === "tasksFinishedPercent"){
            tableContent.textContent = element + "%";
            tableContent.className = percentScale(mission[key]);
        } else {
            tableContent.textContent = element;
        }
        tableContainer2.append(tableContent);
    }
    tbody.append(tableContainer2);
}
