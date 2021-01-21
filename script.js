function calculateTime(object) {
    const timeDistance = object.finishedAt - object.startedAt;
    let duration = ((timeDistance / 1000) / 60);
    if(duration % 60 === 0){
        return duration / 60;
    }
    else{
        let hours = Math.floor(duration / 60);
        let minutes = duration - (hours * 60);
        return Number(hours + "." + minutes)
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
        startedAt: new Date("2021-01-20:14:15"),
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
        finishedAt: new Date("2021-01-20:19:45"),
        tasksGiven: 17,
        tasksFinished: 3,
        topic: "JavaScript - Arrays"
    },
    {
        startedAt: new Date("2021-01-20:14:00"),
        finishedAt: new Date("2021-01-20:19:45"),
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