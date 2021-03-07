const team1Rep = nodecg.Replicant('team1', {defaultValue: 0});
const team2Rep = nodecg.Replicant('team2', {defaultValue: 0});

function addTeam1(){
	team1Rep.value++;
}

function addTeam2(){
	team2Rep.value++;
}

function subtractTeam1() {
	team1Rep.value--;
}

function subtractTeam2() {
	team2Rep.value--;
}

function resetScores() {
	team1Rep.value = 0;
	team2Rep.value = 0;
}