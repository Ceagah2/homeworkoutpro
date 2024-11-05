import { useUser } from "@/data/userContext";
import { Button } from "@/presentation/components/button";
import { Container } from "@/presentation/components/container";
import { Input } from "@/presentation/components/input";
import { SetItem } from "@/presentation/hooks/useStorage";
import { colors } from "@/presentation/theme";
import Training from "@assets/treinadoras.png";
import { useOAuth } from "@clerk/clerk-expo";
import { AntDesign } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import * as Linking from 'expo-linking';
import { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import * as S from "./styles";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loadingButton, setLoadingButton] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { login } = useUser(); 
  const googleOAuth = useOAuth({ strategy: "oauth_google" });
  const appleOAuth = useOAuth({ strategy: "oauth_apple" });
  const navigation: NavigationProp<any, any> = useNavigation();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleEmailLogin = async () => {
    setIsLoading(true);
    if (!email || !password) {
      Alert.alert("Ops...", "Por favor preencha todos os campos.");
      setIsLoading(false);
      return;
    }

    if (email === "carlosteste@teste.com" && password === "teste123") {
      login({
        fullName: "Carlos Teste",
        email,
        photoUrl: "https://via.placeholder.com/400",
        isLoggedBy: "email",
        isLoggedIn: true
      });
      SetItem("@isLogged", "true");
      navigation.navigate("Main");
      setIsLoading(false);
    } else {
      Alert.alert("Ops...", "Email ou senha inválidos.");
      setIsLoading(false);
    }
  };

  const handleOAuthLogin = async (provider: "google" | "apple") => {
    let oauthProvider = provider === "google" ? googleOAuth : appleOAuth;

    try {
      setLoadingButton(provider);
      const redirectUrl = Linking.createURL('/Main')
      const oAuthFlow = await oauthProvider.startOAuthFlow({ redirectUrl })

      if(oAuthFlow.authSessionResult?.type === 'success'){
        if(oAuthFlow.setActive){
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
        }
        setLoadingButton("");
        navigation.navigate('/Main')
      } else (
        setLoadingButton('')
      )
    } catch(e){
      setLoadingButton('')
      console.log(e.data.message)
    }
    // try {
    //   setLoadingButton(provider);
    //   const { createdSessionId, setActive } = await oauthProvider.startOAuthFlow();

    //   if (setActive && createdSessionId && session) {
    //     await setActive({ session: createdSessionId });

    //     const userInfo: User = {
    //       fullName: session?.user?.fullName,
    //       email: session?.user?.emailAddresses[0]?.emailAddress,
    //       photoUrl: session?.user?.profileImageUrl,
    //       isLoggedBy: "social",
    //       isLoggedIn: true,
    //     };
    //    login(userInfo);
    //    console.log("dados do usuario:", userInfo);

    //   }
    // } catch (error) {
    //   console.log("Erro durante o login social:", error.data.message);
    // } finally {
    //    await SetItem("@isLogged", "true");
    //    navigation.navigate("Main"); 
    //   setLoadingButton(null);
    // }
  };


  return (
    <Container>
      <S.Header>
        <S.Title>Home Workout Pro</S.Title>
        <S.Image source={Training} />
        <S.Description>
          Fazer exercícios físicos nunca foi {"\n"} tão fácil e divertido
        </S.Description>
      </S.Header>

      <S.LoginForm>
        <S.InputContainer>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
          />
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

        <S.FooterLinks>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <S.LinkText>Não tem uma conta? Crie uma agora!</S.LinkText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <S.LinkText>Esqueceu a senha? Vamos recuperar!</S.LinkText>
          </TouchableOpacity>
          
        </S.FooterLinks>
      </S.LoginForm>
    </Container>
  );
}
