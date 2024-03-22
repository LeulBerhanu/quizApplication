import { View, Text, StyleSheet, Button, Image } from "react-native";
import React from "react";

export default function Start({ navigation }) {
	return (
		<View style={{ flex: 1 }}>
			<Image
				source={require("../assets/back.jpg")}
				style={{
					width: 400,
					height: 250,

					objectFit: "contain",
				}}
			/>

			<View style={styles.body}>
				<View style={{ width: "80%", marginBottom: 20 }}>
					<View style={{ marginBottom: 20 }}>
						<Text style={styles.titleContainer}>
							Are you ready to put your knowledge to the test?
						</Text>
					</View>
					<Text style={styles.content}>
						Challenge yourself with fun quizzes on our app! Test your knowledge,
						compete with friends, and unlock achievements. Download now for a
						thrilling quiz adventure!
					</Text>
				</View>
				<Button
					title="Start the Quiz"
					onPress={() => navigation.navigate("Home")}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	body: {
		alignItems: "center",
		paddingTop: 20,
		flex: 1,

		backgroundColor: "#5d0b7e",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		marginTop: 10,
	},
	titleContainer: {
		color: "#007c80",
		fontSize: 20,
		textAlign: "center",
		fontWeight: "bold",
	},
	content: {
		color: "grey",
		marginVertical: 20,
		fontSize: 16,
		lineHeight: 24,
		fontStyle: "italic",
	},
});
