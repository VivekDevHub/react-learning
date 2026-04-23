const USERS_KEY = "users";
const LOGGED_USER_KEY = "LogUser";
const LOGGED_USER_ALT_KEY = "LogUSer";

const safeParse = (value, fallback) => {
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};

export const getUsers = () => {
  const rawUsers = localStorage.getItem(USERS_KEY);
  return safeParse(rawUsers, []) || [];
};

export const saveUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const getLoggedUser = () => {
  const rawLoggedUser =
    localStorage.getItem(LOGGED_USER_KEY) ||
    localStorage.getItem(LOGGED_USER_ALT_KEY);

  return safeParse(rawLoggedUser, null);
};

export const findUserByEmail = (email) => {
  const normalizedEmail = email.trim().toLowerCase();
  return getUsers().find(
    (user) => user.email.toLowerCase() === normalizedEmail,
  );
};

export const createUser = ({ name, email, password }) => {
  const users = getUsers();
  const normalizedEmail = email.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.email.toLowerCase() === normalizedEmail,
  );

  if (existingUser) {
    return { ok: false, message: "User already exists with this email." };
  }

  const user = {
    id: Date.now().toString(),
    name: name.trim(),
    email: normalizedEmail,
    password,
  };

  const updatedUsers = [...users, user];
  saveUsers(updatedUsers);

  return { ok: true, user, users: updatedUsers };
};

export const setLoggedUser = (user) => {
  const loggedUser = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  const serialized = JSON.stringify(loggedUser);
  localStorage.setItem(LOGGED_USER_KEY, serialized);
  localStorage.setItem(LOGGED_USER_ALT_KEY, serialized);
};

export const authenticateUser = ({ email, password }) => {
  const user = findUserByEmail(email);

  if (!user || user.password !== password) {
    return { ok: false, message: "Invalid email or password." };
  }

  setLoggedUser(user);

  return { ok: true, user };
};
