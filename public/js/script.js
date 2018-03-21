// Drum Arrays
const createNewDrumArray = () => new Array(16).fill(false);

let kicks = createNewDrumArray();
let snares = createNewDrumArray();
let hiHats = createNewDrumArray();
let rideCymbals = createNewDrumArray();

// toggle true/false in existing array
const toggleDrum = (drumName, index) => {
	const drum = getArrayByName(drumName);
	if (!drum || index < 0 || index > 15) {
		return;
	} else {
		drum[index] = !drum[index];
	}
};

// invert function to flip the boolean values of all elements in array
const invert = array => {
	const arrayToFlip = getArrayByName(array);
	if (!arrayToFlip) {
		return;
	} else {
		for (i = 0; i < arrayToFlip.length; i++) {
			arrayToFlip[i] = !arrayToFlip[i];
		}
	}
};

// Clear function to sets all values to false
const clear = array => {
	const arrayToClear = getArrayByName(array);
	if (!arrayToClear) {
		return;
	} else {
		arrayToClear.fill(false);
	}
};

// Create a function that gets the array based on input string
const getArrayByName = name => {
	switch (name) {
		case "kicks":
			return kicks;
			break;
		case "snares":
			return snares;
			break;
		case "hiHats":
			return hiHats;
			break;
		case "rideCymbals":
			return rideCymbals;
			break;
		default:
			return;
	}
};


