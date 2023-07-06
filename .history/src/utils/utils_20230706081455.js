export const calculateTotal = (tableMembers) => {
	let total = 0
	tableMembers.forEach((member) => {
		total += ((1+(member.tip / 100)) * member.total) + (member.total * .08875)
	})
	return Math.round(100 * total) / 100
}

export const calculateTip = (tableMembers) => {
	let total = 0
	tableMembers.forEach((member) => {
		total += ((member.tip / 100) * member.total)
	})
	return Math.round(100 * total) / 100
}

export const calculateTableTip = (tableMembers) => {
	let total = 0;
	tableMembers.forEach((member) => {
		total += member.tip;
	})
	return Math.round(100 * (total / tableMembers.length)) / 100;
}

export const calculateTableTipAmount = (tableMembers) => {

	let tipAverage = calculateTableTip(tableMembers);
	let tableTotal = calculateBeforeTax(tableMembers);

	return  Math.round(100 * ((tipAverage / 100) * tableTotal)) / 100;
}

export const calculateTax = (tableMembers) => {
	let total = 0;
	tableMembers.forEach((member) => {
		total += (member.total * .08875);
	})
	return Math.round(100 * total) / 100;
}

export const calculateBeforeTax = (tableMembers) => {
	let total = 0;
	tableMembers.forEach((member) => {
		total += member.total;
	})
	return Math.round(100 * total) / 100;
}

export const calculateMemberTotal = (member) => {
	let total = 0;
	member.myItems.forEach((item) => {
		total += item.price;
	})
	return total;
}