const LCasterRep = nodecg.Replicant('leftCaster');
const RCasterRep = nodecg.Replicant('rightCaster');

const LCaster = document.getElementById('leftCaster');
const RCaster = document.getElementById('rightCaster');

nodecg.listenFor('updateCasters', (data) => {
	LCaster.innerHTML = data.leftCaster
	RCaster.innerHTML = data.rightCaster
})

nodecg.listenFor('swapCasters', (data) => {
	RCaster.innerHTML = data.leftCaster
	LCaster.innerHTML = data.rightCaster
})