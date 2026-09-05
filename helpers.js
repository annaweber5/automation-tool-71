const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getPlayer = (name) => {
  return game.Players.GetPlayers().find((p) => p.Name === name);
};

const teleport = (character, position) => {
  if (character && character:FindFirstChild('HumanoidRootPart')) {
    character.HumanoidRootPart.CFrame = CFrame.new(position);
  }
};

const fireRemote = (path, name, ...args) => {
  const remote = path.FindFirstChild(name);
  if (remote && remote:IsA('RemoteEvent')) {
    remote:FireServer(...args);
  }
};

const getDescendant = (parent, className, name) => {
  for (const child of parent:GetDescendants()) {
    if (child:IsA(className) && child.Name === name) {
      return child;
    }
  }
  return null;
};

const invokeRemote = (path, name, ...args) => {
  const remote = path.FindFirstChild(name);
  if (remote && remote:IsA('RemoteFunction')) {
    return remote:InvokeServer(...args);
  }
  return null;
};

export { delay, getPlayer, teleport, fireRemote, getDescendant, invokeRemote };