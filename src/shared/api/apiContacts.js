import { authInstance } from "./apiAuth";

export const getAllContacts = () => authInstance.get('/contacts');

export const addContact = contact =>
  authInstance.post('/contacts', { ...contact });

export const deleteContact = id => authInstance.delete(`/contacts/${id}`);

export const editContact = contact => {
  return authInstance.patch(`/contacts/${contact.id}`, {
    name: contact.name,
    number: contact.number,
  });
};

// const contactsInstance = axios.create({
//   baseURL: "https://64c0ab3d0d8e251fd1125311.mockapi.io/contacts",
// });

// export const getAllContacts = () => contactsInstance.get("/");

// export const deleteContact = (id) => {
//   return contactsInstance.delete(`/${id}`);
// };

// export const addContact = (data) => {
//   return contactsInstance.post("/", data);
// };

// export const editContact = (data) => {
//   return contactsInstance.put(`/${data.id}`, {
//     avatar: data.avatar,
//     name: data.name,
//     phone: data.phone,
//     address: data.address,
//     birthday: data.birthday,
//     email: data.email,
//     number: data.number,
//     company: data.company,
//     department: data.department,
//     position: data.position,
//   });
// };
