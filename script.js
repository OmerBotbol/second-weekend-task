function calculateTime(object) {
    const timeDistance = object.finishedAt - object.startedAt;
    return ((timeDistance / 1000) / 60 / 60);
}
function calculateTaskFinished(object) {
    return Math.floor((object.tasksFinished / object.tasksGiven) * 100);
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
        finishedAt: new Date("2021-01-20:19:30"),
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
document.write("<table>");
document.write("<tr>");
for (const key in missions[0]) {
    if (Object.hasOwnProperty.call(missions[0], key)) {
        document.write("<th>" + key + "</th>");
    }
}
document.write("</tr>");
for (const mission of missions) {
    document.write("<tr>");
    for (const key in mission) {
        let element = mission[key];
        if(key === "startedAt" || key === "finishedAt"){
            element = mission[key].toLocaleTimeString()
        }
        document.write("<td>" + element + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");