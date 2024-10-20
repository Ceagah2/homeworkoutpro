import { Button } from "@/presentation/components/button";
import { Container } from "@/presentation/components/container";
import { Input } from "@/presentation/components/input";
import { SetItem } from "@/presentation/hooks/useStorage";
import { colors } from "@/presentation/theme";
import Training from "@assets/treinadoras.png";
import { useOAuth } from "@clerk/clerk-expo";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import * as S from "./styles";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loadingButton, setLoadingButton] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const googleOAuth = useOAuth({ strategy: "oauth_google" });
  const appleOAuth = useOAuth({ strategy: "oauth_apple" });
  const navigation = useNavigation()

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleEmailLogin = async () => {
    setIsLoading(true)
    if(!email || !password || email === "" || password === "") {
      Alert.alert("Ops...", "Por favor preencha todos os campos.");
      setIsLoading(false);
      return;
    }

    if(email === "carlosteste@teste.com" || password === "teste123") {
      SetItem("@isLogged", "true");
      navigation.navigate("Main")
      setIsLoading(false);
    } else {
      Alert.alert("Ops...", "Email ou senha invalidos.");
      setIsLoading(false);
      return;
    }
  }

  const handleOAuthLogin = async (provider: "google" | "apple") => {
    let oauthProvider;
    switch (provider) {
      case "google":
        oauthProvider = googleOAuth;
        break;
      case "apple":
        oauthProvider = appleOAuth;
        break;
      default:
        return;
    }

    try {
      setLoadingButton(provider);
      const { createdSessionId, setActive } = await oauthProvider.startOAuthFlow();
      if (setActive && createdSessionId) {
        await setActive({ session: createdSessionId });
      }
    } catch (error) {
      console.log("Error during OAuth login:", error);
    } finally {
      setLoadingButton(null);
    }
  };

  return (
    <Container>
      <S.Header>
        <S.Title>Home Workout Pro</S.Title>
        <S.Image source={Training} />
        <S.Description>
          Fazer exercícios físicos nunca foi {'\n'} tão fácil e divertido
        </S.Description>
      </S.Header>

      <S.LoginForm>
        <S.InputContainer>
          <Input placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none"/>
        </S.InputContainer>
        <S.InputContainer>
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <S.EyeIcon onPress={togglePasswordVisibility}>
            <AntDesign
              name={showPassword ? "eye" : "eyeo"}
              size={24}
              color="gray"
            />
          </S.EyeIcon>
        </S.InputContainer>
        <Button
          title="Entrar"
          onPress={handleEmailLogin}
          isLoading={isLoading}
          width={300}
        />

        <S.OrText>Ou continue com</S.OrText>

        <S.ButtonContainer>
          <Button
            onPress={() => handleOAuthLogin("google")}
            isLoading={loadingButton === "google"}
            backgroundColor={colors.primaryAction}
            title={""}
          >
            <AntDesign name="google" size={20} color="white" />
            <S.ButtonText>Google</S.ButtonText>
          </Button>

          <Button
            onPress={() => handleOAuthLogin("apple")}
            isLoading={loadingButton === "apple"}
            backgroundColor={colors.primaryAction}
            title={""}
          >
            <AntDesign name="apple1" size={20} color="white" />
            <S.ButtonText>Apple</S.ButtonText>
          </Button>
        </S.ButtonContainer>
      </S.LoginForm>
    </Container>
  );
}
