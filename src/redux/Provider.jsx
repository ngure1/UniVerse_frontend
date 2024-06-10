"use client";
import { persistor, store } from "./store";
import { Provider } from "react-redux";

import React from "react";
import { PersistGate } from "redux-persist/integration/react";

export const CustomProvider = ({ children }) => {
	return (
		<Provider store={store}>
			<PersistGate
				persistor={persistor}
				loading={null}>
				{children}
			</PersistGate>
		</Provider>
	);
};
