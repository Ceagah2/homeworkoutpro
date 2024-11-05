import { Button } from "@/presentation/components/button";
import { Container } from "@/presentation/components/container";
import { Input } from "@/presentation/components/input";
import { AntDesign } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Alert, Image, TouchableOpacity } from "react-native";
import * as S from "./styles";

export default function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const navigation: NavigationProp<any, any> = useNavigation();

  const handleImagePick = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permissão Necessária",
        "É necessário permitir o acesso à galeria."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result)

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleSignUp = async () => {
    setIsLoading(true);
    if (!email || !password || !confirmPassword) {
      Alert.alert("Ops...", "Por favor, preencha todos os campos.");
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Ops...", "As senhas não coincidem.");
      setIsLoading(false);
      return;
    }

    Alert.alert("Conta criada com sucesso!");
    navigation.navigate("Login");
    setIsLoading(false);
  };

  return (
    <Container>
      <S.Header>
        <S.Title>Cadastre-se no Home Workout Pro</S.Title>
      </S.Header>

      <S.ProfileImageContainer>
        <TouchableOpacity onPress={handleImagePick}>
          {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
          ) : (
            <S.ProfilePlaceholder>
              <AntDesign name="camera" size={32} color="gray" />
            </S.ProfilePlaceholder>
          )}
        </TouchableOpacity>
        <S.ImageText>Escolha uma foto de perfil</S.ImageText>
      </S.ProfileImageContainer>

      <S.SignUpForm>
        <S.InputContainer>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </S.InputContainer>
        <S.InputContainer>
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </S.InputContainer>
        <S.InputContainer>
          <Input
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </S.InputContainer>
        <Button
          title="Cadastrar"
          onPress={handleSignUp}
          isLoading={isLoading}
          width={400}
        />

        <S.FooterLinks>
          <S.LoginLink onPress={() => navigation.navigate("Login")}>
            Já tem uma conta? Faça login!
          </S.LoginLink>
        </S.FooterLinks>
      </S.SignUpForm>
    </Container>
  );
}
