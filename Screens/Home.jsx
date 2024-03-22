import {
	View,
	ImageBackground,
	TouchableOpacity,
	StyleSheet,
} from "react-native";

import { Quiz } from "../QuizQuestion/Quiz";
import Card from "../components/Card";

export default function Home({ navigation }) {
	Home.navigationOptions = {
		headerLeft: null,
	};
	const queTypeData = [
		{
			img: require("../assets/images/science.jpg"),
			title: "Science",
		},
		{
			img: require("../assets/images/sport.jpg"),
			title: "Sport",
		},
		{
			img: require("../assets/images/tech.jpg"),
			title: "Tech",
		},
		{
			img: require("../assets/images/history.jpg"),
			title: "General",
		},
	];
	return (
		<ImageBackground
			source={require("../assets/images/back.jpg")}
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
			blurRadius={5}
		>
			<View style={{ top: -90, borderBottomWidth: 2 }}></View>
			<View style={styles.cardView}>
				{queTypeData.map((item, index) => (
					<TouchableOpacity
						key={Math.random().toString()}
						onPress={() => {
							switch (index) {
								case 0:
									navigation.navigate("Questions", {
										QuestionType: Quiz.Science,
									});
									break;
								case 1:
									navigation.navigate("Questions", {
										QuestionType: Quiz.Sport,
									});
									break;
								case 2:
									navigation.navigate("Questions", {
										QuestionType: Quiz.Tech,
									});
									break;
								case 3:
									navigation.navigate("Questions", {
										QuestionType: Quiz.GenealKnowledge,
									});
									break;
							}
						}}
					>
						<Card Images={item.img} title={item.title} />
					</TouchableOpacity>
				))}
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	cardView: {
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "center",
		alignContent: "center",
		borderWidth: 2,
		height: 350,
		width: 350,
		borderRadius: 175,
		borderColor: "yellow",
		paddingTop: 15,
	},
});
