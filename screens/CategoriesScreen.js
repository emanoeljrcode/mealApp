import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import CategoryGridTitle from "../components/CategoryGridTitle";

export default function CategoriesScreen(props) {
	const renderGridItem = itemData => {
		return (
			<CategoryGridTitle
				title={itemData.item.title}
				color={itemData.item.color}
				onSelect={() => {
					props.navigation.navigate({
						routeName: "CategoryMeals",
						params: {
							categoryId: itemData.item.id
						}
					});
				}}
			/>
		);
	};

	return (
		<FlatList
			keyExtractor={(item, index) => item.id}
			data={CATEGORIES}
			renderItem={renderGridItem}
			numColumns={2}
		/>
	);
}

CategoriesScreen.navigationOptions = {
	headerTitle: "Meal Categories"
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});