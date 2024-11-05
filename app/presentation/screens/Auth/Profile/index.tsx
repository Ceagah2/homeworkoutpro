import { Button } from "@/presentation/components/button";
import { Container } from "@/presentation/components/container";
import { RemoveItem } from "@/presentation/hooks/useStorage";
import { colors } from "@/presentation/theme";
import { AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import * as S from "./styles";

export default function Profile() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation: NavigationProp<any, any> = useNavigation();

  const onLogout = () => {
    setIsLoading(true);
    RemoveItem("@isLogged");
    navigation.navigate("Login");
    setIsLoading(false);
  }
  return (
    <Container>
      <S.Header>
        <S.ProfileImage source={{ uri: "https://via.placeholder.com/400" }} />
        <S.Name>Seu Nome</S.Name>
        <S.Email>email@example.com</S.Email>
      </S.Header>

      <S.SectionTitle>Configurações da Conta</S.SectionTitle>
      <S.SettingsContainer>
        <S.SettingItem>
          <FontAwesome5
            name="user-edit"
            size={24}
            color={colors.primaryAction}
          />
          <S.SettingText>Editar Perfil</S.SettingText>
        </S.SettingItem>

        <S.SettingItem>
          <MaterialIcons
            name="lock-outline"
            size={24}
            color={colors.primaryAction}
          />
          <S.SettingText>Alterar Senha</S.SettingText>
        </S.SettingItem>

        <S.SettingItem>
          <FontAwesome5 name="bell" size={24} color={colors.primaryAction} />
          <S.SettingText>Notificações</S.SettingText>
        </S.SettingItem>
      </S.SettingsContainer>


      <Button
        title="Sair da sua conta"
        onPress={onLogout}
        isLoading={isLoading}
        width={200}
      >
        <AntDesign name="logout" size={18} color={colors.background} />
      </Button>

    </Container>
  );
}
