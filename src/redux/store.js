import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contactsSlice.js";
import filtersSlice from "./filtersSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "contacts",
  storage,
};

const persistContactsReducer = persistReducer(persistConfig, contactsSlice);

export const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
    filters: filtersSlice,
  },
});

export const persist = persistStore(store);
