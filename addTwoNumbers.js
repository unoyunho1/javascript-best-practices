const randomBoolean = () => Math.random() >= 0.5;
const channelName = getChannelName(channel);
const result = await makeHttpRequest(url);