Learn more or give us feedback
const printToDom = (divId, textToPrint) => {
  $(`#${divId}`).html(textToPrint);
};

export default { printToDom };
