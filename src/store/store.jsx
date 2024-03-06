import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import wishlist from '../features/wishlist';

const wishlistPersistConfig = {
    key: 'wishlist',
    storage,
};

const persistedWishlistReducer = persistReducer(wishlistPersistConfig, wishlist);

const store = configureStore({
    reducer: {
        wishlist: persistedWishlistReducer,
    },
})

export const persistor = persistStore(store);
export default store;