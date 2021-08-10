const team1Rep = nodecg.Replicant('team1');
const team2Rep = nodecg.Replicant('team2');

const team1El = document.getElementById('team1');
const team2El = document.getElementById('team2');

const team1Name = document.getElementById('team1Name');
const team2Name = document.getElementById('team2Name');

team1Rep.on('change', (newVal) => {
	team1El.innerHTML = newVal;
})

team2Rep.on('change', (newVal) => {
	team2El.innerHTML = newVal;
})

nodecg.listenFor('updateTeams', (data) => {
	team1Name.innerHTML = data.team1Name
	team2Name.innerHTML = data.team2Name
})

nodecg.listenFor('swapTeams', (data) => {
	team2Name.innerHTML = data.team1Name
	team1Name.innerHTML = data.team2Name
})

nodecg.listenFor('scoresoffToggle', (data) => {
	console.log('hit')
	if (data.value) {
		document.body.style.backgroundImage = 'url("./InGameBo1.png")';
		team1.style.display = 'none';
		team2.style.display = 'none';
	} else {
		document.body.style.backgroundImage = 'url("./InGameBo3.png")';
		team1.style.display = 'block';
		team2.style.display = 'block';
	}
})