// import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.cars.items;
export const selectFavoriteCar = state => state.cars.cars.favorites;
// export const selectIsLoading = state => state.contactsBook.contacts.isLoading;
// export const selectError = state => state.contactsBook.contacts.error;
// export const selectFilter = state => state.contactsBook.filter;

// export const selectFilteredContacts = createSelector(
//   [selectFilter, selectContacts],
//   (savedFilter, items) => {
//     const normalizedFilter = savedFilter.toLowerCase();
//     return items.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter)
//     );
//   }
// );
