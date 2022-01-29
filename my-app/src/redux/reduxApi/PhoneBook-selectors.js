export const getContact = (state) => state.contact.items;
export const getFilter = (state) => state.contact.filter;

export const getVisibleContact = (state) => {
  const contact = getContact(state);

  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contact.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
