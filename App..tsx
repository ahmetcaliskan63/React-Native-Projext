import { View, Text, Image, ScrollView, Button, Pressable } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <Button
          title="Press"
          onPress={() => {
            console.log("Button PresswdS");
          }}
          color={"midnightblue"}
        />
        <Pressable
          onPress={() => {
            console.log("Image Pressed");
          }}
        >
          <Image source={logoImg} style={{ width: 300, height: 300 }} />
        </Pressable>
        <Pressable
          onPress={() => {
            console.log("Text Pressed");
          }}
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            libero ducimus eius, esse aliquam, officia totam nostrum corrupti
            sapiente modi ipsam soluta beatae, vel deserunt. Id sed enim quos
            quas? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Delectus sed tempora, quos repellat, alias repellendus dicta dolores
            doloremque perspiciatis qui nisi. Soluta cupiditate dolorum sapiente
            odio, ullam ratione vitae dolorem. Pariatur nam cupiditate, eius quo
            obcaecati officiis omnis dignissimos iusto inventore, repellendus
            odio expedita deserunt possimus eligendi at accusantium. Cupiditate
            ab vel iste delectus omnis, voluptatum esse sapiente doloremque
            possimus. Possimus dolores delectus blanditiis quisquam quae
            suscipit! Placeat, ipsum numquam ipsa ab assumenda obcaecati officia
            consequuntur suscipit accusamus modi possimus repellendus sunt,
            debitis tenetur voluptatibus fuga labore quis quas minima!
            Doloremque odio voluptatum ipsam deserunt odit, iste facere? Itaque
            nam illum pariatur praesentium beatae in minima et ullam ab qui.
            Voluptas tempora dignissimos porro quis architecto vero molestiae,
            voluptates ipsa.
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
