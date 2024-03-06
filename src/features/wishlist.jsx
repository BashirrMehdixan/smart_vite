import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    idArray: [],
    count: 0,
}

const wishlist = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const currentProduct = {...action.payload, active: true};
            const itemIndex = state.items.findIndex(item => item.id === currentProduct.id);
            if (!state.idArray.includes(currentProduct.id)) {
                state.items.push(currentProduct);
                state.idArray.push(currentProduct.id)
                state.count += 1;
            } else {
                if (itemIndex !== -1) {
                    currentProduct.active = false
                    state.items.splice(itemIndex, 1);
                    state.idArray.splice(itemIndex, 1)
                    state.count -= 1;
                }

            }
        },

    }
})

export const {addToWishlist} = wishlist.actions;
export default wishlist.reducer;