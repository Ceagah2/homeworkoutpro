import { useUser } from "@/data/userContext";
import { IFullUser } from "@/data/userContext.interface";
import { Button } from "@/presentation/components/button";
import { Container } from "@/presentation/components/container";
import { colors } from "@/presentation/theme";
import { useUser as Data } from '@clerk/clerk-expo';
import { AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import * as S from "./styles";

export default function Profile() {
  const { userData, logout } = useUser();
  const { user } = Data()
  const [newUserData, setNewUserData] = useState<IFullUser>();
  const [notifications, setNotifications] = useState<number>();
  const navigation: NavigationProp<any,any> = useNavigation()

  const handleLogout = () => {
    logout
    navigation.navigate('Login')
  }

  useEffect(()=> {
    const loginCheck = () => {
      if(!userData) return
      const loginRoute = userData.isLoggedBy

      if(loginRoute === 'email') setNewUserData(userData);

      if(loginRoute === 'social') setNewUserData<Pick<IFullUser, 'fullName' | 'email' | 'photoUrl'>>(user)
        
    }

    loginCheck()
  },[])

  useEffect(() => {
    const notificationsCheck = () => {
      const notification = Math.floor(Math.random() * 10);
      setNotifications(notification)
    };
    notificationsCheck();
  },[notifications])
    

  return (
    <Container>
      {(!newUserData && !user)  ? (
        <>
          <ActivityIndicator />
          <Button
            title="Sair da sua conta"
            onPress={() => handleLogout()}
            width={200}
          />
        </>
      ) : (
        <>
          <S.Header>
            <S.ProfileImage source={{ uri: newUserData?.photoUrl || user?.imageUrl }} />
            <S.Name>{newUserData?.fullName || user?.fullName}</S.Name>
            <S.Email>{newUserData?.email || user?.primaryEmailAddress?.emailAddress}</S.Email>
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
              <FontAwesome5
                name="bell"
                size={24}
                color={colors.primaryAction}
              />
              <S.SettingText>Notificações</S.SettingText>
              <S.NotificationsContainer>
                <S.NotificationsText>
                  {notifications && notifications > 9 ? '9+' : notifications}
                </S.NotificationsText>
              </S.NotificationsContainer>
            </S.SettingItem>
          </S.SettingsContainer>

          <Button
            title="Sair da sua conta"
            onPress={() => handleLogout()}
            width={200}
          >
            <AntDesign name="logout" size={18} color={colors.background} />
          </Button>
        </>
      )}
    </Container>
  );
}
