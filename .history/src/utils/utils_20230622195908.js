const calculateTotal = (tableMembers) => {
    let total = 0;
    tableMembers.forEach((member) => {
      total += (Math.round(100 * (((1+(member.tip / 100)) * member.total) + (member.total * .08875))) / 100);
    })
    return total;
  }

  const calculateTip = (tableMembers) => {
    let total = 0;
    tableMembers.forEach((member) => {
      total += ((member.tip / 100) * member.total);
    })
    return (Math.round(100 * total) / 100);
  }

  const calculateTableTip = (tableMembers) => {
    let total = 0;
    tableMembers.forEach((member) => {
      total += member.tip;
    })
    return total / tableMembers.length;
  }

  const calculateTax = (tableMembers) => {
    let total = 0;
    tableMembers.forEach((member) => {
      total += (member.total * .08875);
    })
    return Math.round(100 * total) / 100;
  }

  const calculateBeforeTax = (tableMembers) => {
    let total = 0;
    tableMembers.forEach((member) => {
      total += member.total;
    })
    return Math.round(100 * total) / 100;
  }