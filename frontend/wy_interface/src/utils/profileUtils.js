export const checkMessagesSent = (messagesSent) => {
  if (messagesSent < 10) {
    return "What never sent a message before?";
  } else if (messagesSent < 333) {
    return "Sending messages can strain your hands...";
  } else if (messagesSent < 1000) {
    return "Awawa! Hrumph Hrumph! Send more messages!!!";
  } else if (messagesSent < 5000) {
    return "For the glory of the Rax Empire!!!";
  } else {
    return "You keep sendin' em, we keep deliverin'!";
  }
};
